// styles
import { useEffect, useState } from "react";
import { Card } from "../../UI";
import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// data
import { getAllMeals } from "../../../data";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const responseData = await getAllMeals();

      const loadedMeals = [];
      for (const key in responseData) {
        if (Object.hasOwnProperty.call(responseData, key)) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        description={meal.description}
        key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
      />
    );
  });

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

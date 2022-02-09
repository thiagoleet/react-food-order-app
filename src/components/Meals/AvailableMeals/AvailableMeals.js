// styles
import { Card } from "../../UI";
import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// data
import { DUMMY_MEALS } from "./dummy-meals";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
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

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

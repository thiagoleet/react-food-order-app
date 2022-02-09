// react
import { Fragment } from "react";

// components
import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;

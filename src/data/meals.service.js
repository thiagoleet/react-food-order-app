const url = "https://react-http-212ab-default-rtdb.firebaseio.com/meals.json";

const getAllMeals = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getAllMeals };

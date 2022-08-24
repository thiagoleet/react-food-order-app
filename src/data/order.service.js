const url = "https://react-http-212ab-default-rtdb.firebaseio.com/orders.json";

const addOrder = async (order) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
};

export { addOrder };

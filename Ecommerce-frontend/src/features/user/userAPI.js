export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-ecommerce-backend-project.onrender.com/api/orders/own/");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-ecommerce-backend-project.onrender.com/api/users/own");
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-ecommerce-backend-project.onrender.com/api/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}

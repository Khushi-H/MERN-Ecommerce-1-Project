export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}
export function updateOrder(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/orders/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}
export function fetchAllOrders(pagination) {
  let queryString = "";

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch("/orders?" + queryString);
    const data = await response.json();
    resolve({ data });
  });
}

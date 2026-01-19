export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-ecommerce-backend-project.onrender.com/api/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}
export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-ecommerce-backend-project.onrender.com/api/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-ecommerce-backend-project.onrender.com/api/products/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination, admin) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price"}
  //pagination:{_page:1,_per_page:10}
  // TODO : on server we will support multi values in filter
  //todo: server will filter deleted products in case of non-admin
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if (admin) {
    queryString += `admin=true`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-ecommerce-backend-project.onrender.com/api/products?" + queryString);
    const data = await response.json();

    resolve({ data });
    // const totalItems = await response.headers.get("X-Total-Count");
    // resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategory() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-ecommerce-backend-project.onrender.com/api/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://mern-ecommerce-backend-project.onrender.com/api/brands");
    const data = await response.json();
    resolve({ data });
  });
}

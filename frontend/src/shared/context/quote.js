import strapi from "../strapi/strapi";

export default {
  get: () =>
    strapi("http://localhost:1337/quotes", "GET", "", false)
      .then((response) => response.json())
      .then((data) => {
        if (data) return data;
      }),
  post: () => {},
  update: () => {},
  delete: () => {},
};

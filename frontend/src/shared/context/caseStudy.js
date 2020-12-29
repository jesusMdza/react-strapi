import strapi from "../strapi/strapi";

export default {
  get: () =>
    strapi("http://localhost:1337/case-studies", "GET", "", false)
      .then((response) => response.json())
      .then((data) => {
        if (data) return data;
      }),
  post: (body) =>
    strapi("http://localhost:1337/case-studies", "POST", body, true),
  update: (id, body) => {
    strapi(`http://localhost:1337/case-studies/${id}`, "PUT", body, true);
  },
  delete: (id) =>
    strapi(`http://localhost:1337/case-studies/${id}`, "DELETE", "", true),
};

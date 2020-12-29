const strapi = (url, method, body, isAuth) => {
  const options = {
    method: method,
    mode: "cors",
  };

  if (isAuth) {
    const token = localStorage.getItem(JSON.parse("token"));
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options);
};

export default strapi;

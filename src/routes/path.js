function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";
const ROOTS_APP = "/";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  category: {
    root: path(ROOTS_DASHBOARD, "/category"),
    view: (id) => path(ROOTS_DASHBOARD, `/category/${id}`),
  },
  products: {
    root: path(ROOTS_DASHBOARD, "/products"),
    view: (id) => path(ROOTS_DASHBOARD, `/products/${id}`),
  },
  orders: {
    root: path(ROOTS_DASHBOARD, "/orders"),
    view: (id) => path(ROOTS_DASHBOARD, `/orders/${id}`),
  },
};

export const PATH_APP = {
  root: ROOTS_APP,
  food: {
    root: path(ROOTS_APP, "/products"),
    view: (id) => path(ROOTS_APP, `/products/${id}`),
  },
  search: {
    root: path(ROOTS_APP, "/search"),
  },
  cart: {
    root: path(ROOTS_APP, "/cart"),
  },
  order: {
    root: path(ROOTS_APP, "/order"),
  },
  checkout: {
    root: path(ROOTS_APP, "/checkout"),
  },
};

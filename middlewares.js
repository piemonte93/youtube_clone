import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube Clone";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthentificated: true,
    id: 1,
  };
  next();
};

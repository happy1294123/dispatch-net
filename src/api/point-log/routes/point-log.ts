/**
 * point-log router
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::point-log.point-log');

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes:any;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "GET",
    path: "/point-log/:userId",
    handler: "api::point-log.point-log.getEditPoint",
  },
];


export default customRouter(defaultRouter, myExtraRoutes)

/**
 * point-log controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::point-log.point-log', ({strapi}) => ({
  async getEditPoint(ctx) {
    try{
      const pointLogList = await strapi.db.query('api::point-log.point-log').findMany({
        where: {
          user: {
            id: parseInt(ctx.params.userId)
          }
        },
      })

      let add = 0
      let minus = 0
      pointLogList.forEach(log => {
        if (log.edit_point > 0) {
          add += log.edit_point
        } else if (log.edit_point < 0) {
          minus += log.edit_point
        }
      })
      ctx.body = {add, minus}
    }catch(err) {
      ctx.body = err
    }
  }
})); 

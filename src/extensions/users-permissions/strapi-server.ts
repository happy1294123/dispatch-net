export default (plugin) => {
  const register = plugin.controllers.auth.register;

  plugin.controllers.auth.register = async (ctx) => {
    ctx.request.body.email = `${ctx.request.body.username}@strapi.io`
    await register(ctx);
  };
  return plugin;
};
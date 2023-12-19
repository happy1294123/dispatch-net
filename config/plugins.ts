export default {
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: '派工網',
      },
      'x-strapi-config': {
        // Leave empty to ignore plugins during generation
        // plugins: [ 'upload', 'users-permissions'],
        plugins: ['users-permissions'],
        path: '/documentation',
      },
      security: [ { bearerAuth: [] } ],
      servers: [
      {
        url: "http://localhost:1337/api",
        description: "Development server"
      },
      // {
      //   url: "https://dispatch-net.onrender.com/api",
      //   description: "remote server"
      // },
    ],
    },
  }
}
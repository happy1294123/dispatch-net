export default ({ env }) => ({
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
        plugins: ['upload', 'users-permissions'],
        path: '/documentation',
      },
      security: [{ bearerAuth: [] }],
      servers: [
        {
          url: "http://localhost:1337/api",
          description: "Development server"
        },
        {
          url: "https://dispatch-net.onrender.com/api",
          description: "remote server"
        },
      ],
    },
  },
  // cloudinary image CDN
  // upload: {
  //   config: {
  //     provider: 'cloudinary',
  //     providerOptions: {
  //       cloud_name: env('CLOUDINARY_NAME'),
  //       api_key: env('CLOUDINARY_KEY'),
  //       api_secret: env('CLOUDINARY_SECRET'),
  //     },
  //     actionOptions: {
  //       upload: {},
  //       delete: {},
  //     },
  //   },
  // },

  // S3 image CDN
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          ACL: env('AWS_ACL', 'public-read'),
          signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  }
})
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'http://localhost:3001','https://aneeshashop-page-eaziqxcxl-aneesha-kps-projects.vercel.app','https://aneesha-92vw3djnw-aneesha-kps-projects.vercel.app/'],
      credentials: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

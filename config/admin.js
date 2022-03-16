module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ecdd72b284c71580ad815e995674c455'),
  },
});

export default {
  port: parseInt(process.env.PORT) || 8080,
  nodeEnv: process.env.NODE_ENV || 'production',
  saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
  jwtAccessTokenSecret:
    process.env.JWT_ACCESS_TOKEN_SECRET ||
    '2e1fc352ca9dc10a411e054bfde18ad94a31600d998d34d66286dd171bd90c1b',
  jwtRefreshTokenSecret:
    process.env.JWT_REFRESH_TOKEN_SECRET ||
    '5917312354d6cfb5b9d59b2494bccd269c911ac9007d8a8ce011d360a8c7600c',
};

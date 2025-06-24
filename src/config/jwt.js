const jwtConfig = {
  secret: process.env.JWT_SECRET || 'your-secret-key-here',
  expiresIn: '24h',
  refreshIn: '7d',
};

module.exports = jwtConfig;

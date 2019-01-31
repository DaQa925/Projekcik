const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://dawidtest:dawidtest1@ds139341.mlab.com:39341/kregielnia',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;

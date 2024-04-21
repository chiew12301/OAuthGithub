// Get the config either from environment variables or pick the default
const config = {
  PORT: process.env.PORT || "3000",
  CLIENT_ID: process.env.CLIENT_ID || "45336d148c61d5a68a55",
  CLIENT_SECRET: process.env.CLIENT_SECRET || "8463599690672e744984a15c19e7771dfe306593"  
}

module.exports = config;

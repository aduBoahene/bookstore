require("dotenv").config();
 const {Pool} = require('pg');
  
  const devConfig = {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
  };

  //const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

  const proConfig = process.env.DATABASE_URL;

  const pool = new Pool(devConfig);
  
  module.exports = pool; 

import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();

const { PORT, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER, SQL_PORT } =
  process.env;

const config = {
  port: parseInt(PORT, 10), // Ensure the port is a number
  sql: {
    host: SQL_SERVER,
    port: parseInt(SQL_PORT, 10), // Ensure the port is a number
    user: SQL_USER,
    password: SQL_PASSWORD,
    database: SQL_DATABASE,
  },
};

const connectToDatabase = async () => {
  const connection = mysql.createConnection(config.sql);

  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        reject(new Error(`Database connection failed: ${error.message}`));
      } else {
        console.log("Database connected successfully");
        resolve(connection); // Resolve with the connection object
      }
    });
  });
};

export { config, connectToDatabase }; // Export both config and connectToDatabase

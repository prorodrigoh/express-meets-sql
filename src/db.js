import mysql from 'mysql2'
import credentials from '../credentials.js'

const connectDB = mysql.createConnection ({
    host: "localhost",
    database: 'fosterpet',
    ...credentials         // ... gets all fields from the object inside credentials.js
}).promise();

export default connectDB;
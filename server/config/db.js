import mysql from 'mysql';
import 'dotenv/config';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

db.connect((err)=>{
    if(err){
        console.log("Database connection " +  err)
    } else {
        console.log('Connected to Mysql Databae: ' + process.env.DATABASE);
    }
})

export default db;
import {Pool} from 'pg'
import "dotenv/config"

export const pool: Pool = new Pool({
    user: process.env.user_,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: parseInt(process.env.port || "5432"),
   });

export async function create_tables() {
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await pool.query(`CREATE TABLE IF NOT EXISTS USER_INFO (
        userId UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
        first_name varchar(50) not null,
        last_name varchar(50) not null,
        emailId varchar(50),
        password varchar(50)
    )`);

    // await pool.query(`INSERT INTO USER_INFO (first_name, last_name, emailId, password) VALUES (
    //    'Jatin',
    //   'Vatsa',
    //   ' Jatin@1234',
    //   '1234'  
    // )`);

}


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
    const abc = await pool.query(`CREATE TABLE IF NOT EXISTS USER_INFO (
        userId UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
        first_name varchar(50) not null,
        last_name varchar(50) not null,
        emailId varchar(50),
        password varchar(50)
    )`);
 
    await pool.query(`CREATE TABLE IF NOT EXISTS BLOG (
        Title varchar(50) not null,
        Description varchar(50) not null,
        Blog_Id UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
        Tags varchar(100) not null,
        Status varchar(50) not null,
        userId UUID,  
        Category_Id varchar(50) NOT NULL,
        FOREIGN KEY (userId) REFERENCES USER_INFO(userId)

    )`)

   await pool.query(`CREATE TABLE IF NOT EXISTS CATEGORIES (
    category_id UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
    category_type varchar(50)
)`)
  
   await pool.query(`INSERT INTO CATEGORIES (category_type) VALUES
   ('Entertainment'),
    ('Technology'),
    ('Sports'),
    ('Fashion'),
    ('Food'),
    ('Travel'),
    ('Health'),
    ('Education'),
    ('Automotive'),
    ('Science');
`);








}


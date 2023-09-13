import { Pool } from "pg";
import { config } from "dotenv";

const pool: Pool = new Pool({
    user: process.env.user_,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: parseInt(process.env.port || "5432"),
  });
  async function create_tables (){
	const client = await pool.connect()
	await client.query('BEGIN');


const talent=await pool.query(`CREATE TABLE IF NOT EXISTS TALENT (
	
	talent_id UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	gender char,
	created_date DATE,
	is_active BOOLEAN NOT NULL
	
)`)



await pool.query(`CREATE TABLE IF NOT EXISTS PROJECTS(
	project_id UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
	project_name varchar(50),
	project_Description varchar(50),
	createdBy varchar(50),
	createdAt Date
)`)

await pool.query(`CREATE TABLE IF NOT EXISTS SUBMISSION (
	submission_id serial PRIMARY KEY,
 projectId UUID,
    talentId UUID,
	submission_date DATE,
	FOREIGN KEY (projectId) REFERENCES PROJECTS (project_id),
    FOREIGN KEY (talentId) REFERENCES TALENT (talent_id)
	
)`)
console.log("database setup done");


}
  export { pool}
  export {create_tables}
import { Request, Response } from "express";
import { Pool } from "pg";
import {pool }from "../database";
import dotenv from "dotenv";
dotenv.config({
  path: "/Users/shwetathakkar/cn/postgInTS/.env",
});


interface ISubmission {
  projectId: string;
  talentId: string;
}

export const submitToproject = async (req: Request, res: Response) => {
  try {
    const { projectId, talentId }: ISubmission = req.body;

    if (projectId == null || talentId == null) {
      throw new Error("Project ID or Talent ID is missing");
    }

    const result_talent = await pool.query(
      `SELECT * FROM TALENT WHERE talent_id=$1`,
      [talentId]
    );
    const result_project = await pool.query(
      `SELECT * FROM PROJECTS WHERE project_id=$1`,
      [projectId]
    );

    if (!result_talent.rows[0] || !result_project.rows[0])
      throw Error("Talent or Project dosenot exist");

    const submissionResult = await pool.query(
      `SELECT * FROM SUBMISSION WHERE projectId = $1 AND talentId = $2`,
      [projectId, talentId]
    );

    if (submissionResult.rows.length > 0) {
      return res.json("Already submitted");
    }
    const currentDate = Date.now();

    const submission = await pool.query(
      "INSERT INTO SUBMISSION (talentId, projectId,submission_date) VALUES ($1, $2,$3)",
      [talentId, projectId, new Date(currentDate)]
    );
res.send({
  status:"successfull",
  message:"submitted successfully ",
  submission
  
})
  } catch (err) {
    res.send({
      status:"Failed",
      message:"Error found",
      Error:err
    })
  }
};

// Get all submissions for particular talent.
export const submission_for_project = async (req: Request, res: Response) => {
  try{
   
    const searchTerm = req.query.term;
console.log(searchTerm)
    const result = await pool.query(
      'SELECT * FROM TALENT WHERE first_name ILIKE $1',
      [`%${searchTerm}%`]
    );
    console.log(result.rows)

   
    // SELECT *
    //   FROM SUBMISSION S
   
    //   WHERE T.first_name = $1
    //  //  LEFT JOIN  TALENT T ON S.talentId=T.talent_id 
    //  LEFT JOIN PROJECTS P ON S.projectId = P.project_id
    res.send({
      status:"successfull",
      message:"submitted successfully ",
     data: result.rows  
    })
    
      
      
    }
  catch(err){
    res.send({
      status:"Failed",
      message:"Error found",
      Error:err
    })
  }
}
//Get all Submissions on a project sorted by submission date (latest first).
export const latestSubmission = async (req: Request, res: Response) => {
  try{
    const projectId = req.query.project;
  
    const result = await pool.query(
      `   SELECT *
     FROM SUBMISSION S
     JOIN PROJECTS P ON S.projectId = P.project_id
     WHERE S.projectId = $1
     ORDER BY S.submission_date DESC;
     `,
      [projectId]
    );
    res.send({
      status:"successfull",
      message:"submitted successfully ",
      result  
    });

  }catch(err){
    res.send({
      status:"Failed",
      message:"Error found",
      Error:err
    })
  }
};



// Get all submissions for each talent sorted by talents
export const submission_bytalent =async(req:Request,res:Response)=>{
  try{

  const result=  await pool.query(`SELECT t.first_name, t.last_name, s.projectId
    FROM TALENT t
    LEFT JOIN SUBMISSION s ON t.talent_id = s.talentId
    GROUP BY t.first_name, t.last_name,s.projectId
    ORDER BY t.first_name`)
    if(result.rows.length>0)
return res.status(200).json(result)

}catch(err){
  res.send({
    status:"Failed",
    message:"Error found",
    Error:err
  })
}

    
}


//Get all the projects with the total number of submissions sorted by total submission.

export const count_submission =async(req:Request,res:Response)=>{
try{
  const result = await pool.query(`select COUNT(s.submission_id),project_name from SUBMISSION s 
  left join PROJECTS p on s.projectId = p.project_id group by project_name`)
  if(result.rows.length>0){
    res.send({
      status:"successfull",
      message:"submitted successfully ",
      result  
    });
  }

}catch(err){
  res.send({
    status:"Failed",
    message:"Error found",
    Error:err
  })
}
 
 
}



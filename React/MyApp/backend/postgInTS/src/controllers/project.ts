import { Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import {pool} from "../database";
import { IProject } from "../interface/project";
dotenv.config({
  path: "/Users/shwetathakkar/cn/postgInTS/.env",
});


export const projectadded = async (req: Request, res: Response) => {
  try {
    const { project_name, project_Description, createdBy , genre }: IProject = req.body;

    if (req.body == null) throw Error("Body is empty");

    const result = await pool.query(
      `INSERT INTO PROJECTS (project_name, project_Description,createdBy ,createdAt , genre ) VALUES ($1,$2,$3,$4 , $5) `,
      [project_name, project_Description, createdBy, new Date(),genre ]
    );

    res.send({ message: "project added successfully" });
  } catch (err) {
    console.log(err);
  }
};


export const listAllProject = async (req: Request, res: Response ) => {
 
  try {

    const searchTerm = req.query.term;
    const query = await pool.query('SELECT * FROM PROJECTS WHERE project_name ILIKE $1',[`%${searchTerm}%`]);
  console.log(query)
    res.status(200).json(query);
  } catch (err) {
    console.log(err);
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  const { projectId } = req.body;
  try {
    if (projectId == null) {
      throw new Error("Talent ID is missing");
    }
    const result = await pool.query(
      `SELECT * FROM SUBMISSION WHERE projectId = $1`,
      [projectId]
    );
    if (result.rows.length < 0) throw new Error("project dont exists");

    const deleteQuery = pool.query(
      ` DELETE FROM SUBMISSION WHERE talentId=$1`,
      [projectId]
    );

    const _delete = pool.query(` DELETE FROM TALENT WHERE talent_id=$1`, [
      projectId,
    ]);
    res.status(200).json({
      message: "Project and submissions deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    let { project_id, project_name, project_Description, createdBy ,genre }: IProject =
      req.body;

    const data = await pool.query(
      `SELECT * FROM PROJECTS WHERE project_id=$1`,
      [project_id]
    );
    project_name =
      project_id === null ? data.rows[0].project_name : project_name;
    project_Description =
      project_Description === null
        ? data.rows[0].project_Description
        : project_Description;
    createdBy = createdBy === null ? data.rows[0].createdBy : createdBy;
    genre=genre ===null ? data.rows[0].genre : genre;

    await pool.query(
      `UPDATE PROJECTS SET 
    project_name=$1,
    project_Description=$2,
    createdBy=$3 ,genre=$4 `,

      [project_name, project_Description, createdBy,genre]
    );
    res.send("project updated successfull");
  } catch (err) {
    res.send(err);
  }
};


export const SortProject = async (req: Request, res: Response ) => {
 
  try {
    const query = await pool.query('SELECT * FROM PROJECTS ORDER BY Lower(project_name) ')
  console.log(query)
    res.status(200).json(query);
  } catch (err) {
    console.log(err);
  }
};

export const SortCreateby = async (req: Request, res: Response ) => {
 
  try {
    const query = await pool.query('SELECT * FROM PROJECTS ORDER BY Lower(createdby)')
  console.log(query)
    res.status(200).json(query);
  } catch (err) {
    console.log(err);
  }
};

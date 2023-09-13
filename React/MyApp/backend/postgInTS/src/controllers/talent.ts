import { Pool } from "pg";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { ITalent } from "../interface/talent";

import{ pool }from "../database";
dotenv.config({
  path: "/Users/shwetathakkar/cn/postgInTS/.env",
});

//add pagination
export const listALlTalent = async (req: Request, res: Response) => {
  try {
const {offset,limit}=req.body

    
    // const offset = parseInt(req.body.offset as string) || 0;
    // const limit = parseInt(req.body.limit as string) || 1;
    console.log(offset, limit)
    const results = await pool.query(`select * from TALENT offset ${offset} limit ${limit} `);
    res.send({
      status:"Success",
      message:"listed successfully",
      results
    })
  } catch (err) {
    console.log(err);
  }
};

export const createTalent = async (req: Request, res: Response) => {
  try {
    const {
      first_name,
      last_name,
      email,
      gender,

      is_active,
    }: ITalent = req.body;

    if (req.body == null) throw new Error("Body is empty");
    const result = `INSERT INTO TALENT (first_name, last_name, email, gender, created_date, is_active)
       VALUES ( $1, $2, $3, $4, $5 , $6)
     `;

    await pool.query(result, [
      first_name,
      last_name,
      email,
      gender,
      new Date(),
      is_active,
    ]);
    res.status(201).send("Data inserted successfully");
  } catch (err) {
    console.log(err);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    let {
      talent_id,
      first_name,
      last_name,
      email,
      gender,
      is_active,
    }: ITalent = req.body; 
    console.log(req.body);
    const alldata = await pool.query(
      `select * from talent WHERE talent_id = $1 `,
      [talent_id]
    );
    console.log(alldata.rows[0].last_name);

    first_name == null ? alldata.rows[0].first_name : first_name;
    last_name = last_name == null ? alldata.rows[0].last_name : last_name;
    email = email == null ? alldata.rows[0].email : email;
    gender = gender == null ? alldata.rows[0].gender : gender;
    is_active = is_active == null ? alldata.rows[0].is_active : is_active;

    const update = await pool.query(
      `UPDATE TALENT SET 
      first_name = $2,
         last_name = $3,
         email = $4,
         gender = $5,
         is_active = $6
         WHERE talent_id = $1
      `,
      [talent_id, first_name, last_name, email, gender, is_active]
    );

    console.log(update);
    if (!update) res.send(Error);
    else res.status(201).send("Data updated successfully");
  } catch (err) {
    console.log(err);
  }
};


export const deleteTalent = async (req: Request, res: Response) => {
  // const { talent_id } = req.body;

  // const deletedata = await pool.query(
  //   ` DELETE FROM TALENT
  //   WHERE talent_id = $1`,
  //   [talent_id]
  // );

  // res.status(201).send("Data deleted successfully");

  try {
    const { talentId } = req.body;

    if (talentId == null) {
      throw new Error("Talent ID is missing");
    }
    const result = await pool.query(
      `SELECT * FROM SUBMISSION WHERE talentId = $1`,
      [talentId]
      );
      if (result.rows.length < 0) throw new Error("talent dont exists"); //

    const deleteQuery =await pool.query(
      ` DELETE FROM SUBMISSION WHERE talentId=$1`,
      [talentId]
    );

    const _delete = await pool.query(` DELETE FROM TALENT WHERE talent_id=$1`, [
      talentId,
    ]);
    res.status(200).json({
      message: "Talent and submissions deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};




export const filterALlTalentByActive = async (req: Request, res: Response) => {
  try {
    const results = await pool.query(`select * from TALENT  where is_active=true`);
    res.send({
      status:"Success",
      message:"listed successfully",
      results
    })
  } catch (err) {
    console.log(err);
  }
};

export const filterALlTalentByGender = async (req: Request, res: Response) => {
  try {
    const results = await pool.query(`select * from TALENT  where gender='F'`);
    res.send({
      status:"Success",
      message:"listed successfully",
      results
    })
  } catch (err) {
    console.log(err);
  }
};

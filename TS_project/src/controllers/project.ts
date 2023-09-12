import { Request, Response } from 'express';
import { ProjectModel } from "../models/project";
import { LocationModel } from "../models/location";
import { v4 as uuid } from "uuid";
import { InewProject } from "../interfaces/newproject";
import jwt, { JwtPayload } from "jsonwebtoken";
import { LocationEntityModel } from '../models/locationEntity';
import { ILocation } from '../interfaces/location';
import { DateEntityModel } from '../models/dateEntity';
export const createProject =async(req:Request,res:Response)=>{
    try { 
        if(req.body!==null){
            const {
                projectName,
                internalProjectName,
                projectType,
                union,
                cdNameContactInfo,
                projectDescription,
                castingAssociateContactInfo,
                castingAssistantContactInfo,
                castingPhoneNumberContactInfo,
                castingEmailContactInfo,
                workDateFrom,
                workDateTo,
                workDate,
                workLocation,
                auditionLocation,
                auditionDateFrom,
                auditionDateTo,
                auditionDate,
                projectLocation,
                isPublished,
            }: InewProject = req.body;
            
     
        const validator:boolean | string=
          projectName &&
          internalProjectName &&
          projectType &&
          union &&
          projectDescription
          if (
            (typeof validator === "string" && validator.length < 0) ||
            typeof validator === undefined
          ) {
            return res.status(500).send({
              status: "Failed",
              message: "Something is left to be filled",
            });
          }
        const projectId = uuid();
        const authorization:string|undefined = req.get("Authorization");
        if(authorization===undefined)
        return("please provide authorization token")
   
        const token:string = authorization.split(" ")[1];
        const decode_token:string | JwtPayload = jwt.verify(token, process.env.SECRET_KEY || "") as JwtPayload;
        const createdBy=decode_token.useId;

        const project = new ProjectModel({
        createdBy:createdBy,
          projectId: projectId,
          projectName: projectName,
          internalProjectName: internalProjectName,
          projectType: projectType,
          union: union,
          projectDescription: projectDescription,
          cdNameContactInfo: cdNameContactInfo,
          workDateFrom:workDateFrom,
          workDate:workDate,
          workToDate:workDateTo,
          auditionDate:auditionDate,
          auditionFromDate:auditionDateFrom,
          auditionToDate:auditionDateTo,
          projectLocation:projectLocation,
          isPublished:isPublished,
        });
    
        function generateDates(auditionDateFrom:Date, auditionDateTo:Date) {
          const dateList:Date[] = [];
         let start_date=new Date(auditionDateFrom)
         let end_date=new Date(auditionDateTo)
          while (start_date <= end_date) {
            dateList.push(new Date(start_date));
    
           start_date.setDate(start_date.getDate() + 1);
          }
    
          return dateList;
        }
    
        try {
          const location_array:string[] = auditionLocation.split(",");
          for (let i = 0; i < location_array.length; i++) {
            const data = await LocationModel.findOne({
              locationName: location_array[i],
            });
           
            
            let id: string = "";
            if(data !==null)
             id= data.locationId;
    
            const addData = new LocationEntityModel({
              locationId: id,
              entityId: projectId,
              entityType: "audition",
            });
            await addData.save();
          }
        } catch (error) {
          console.log(error);
        }
    
        try {
          const location_array = workLocation.split(",");
          for (let i = 0; i < location_array.length; i++) {
            const data = await LocationModel.findOne({
              locationName: location_array[i],
            });
            let id: string = "";
            if(data!==null)
           id = data.locationId;
    
            const addData = new LocationEntityModel({
              locationId: id,
              entityId: projectId,
              entityType: "work",
            });
            await addData.save();
          }
        } catch (error) {
          console.log(error);
        }
    
        try {
          const location_array = projectLocation.split(",");
          for (let i = 0; i < location_array.length; i++) {
            const data = await LocationModel.findOne({
              locationName: location_array[i],
            });
            let id: string = "";
            if(data!==null)
             id = data.locationId;
    
            const addData = new LocationEntityModel({
              locationId: id,
              entityId: projectId,
              entityType: "project",
            });
            await addData.save();
          }
        } catch (error) {
          console.log(error);
        }
    
        try {
          let Dates:Date[] = [];
          if (auditionDate !== undefined) {
            Dates.push(auditionDate);
          } else if (auditionDateFrom && auditionDateTo) {
            Dates = generateDates(
              auditionDateFrom,
              auditionDateTo)
            
          }
          for (let i = 0; i < Dates.length; i++) {
            const result = new DateEntityModel({
              entityId: projectId,
              date: Dates[i],
              entityType: "audition",
            });
            await result.save();
           
          }
        } catch (error) {
          console.log(error);
        }
    
        try {
          let Dates:Date[] = [];
          if (workDate != undefined) {
            Dates.push(workDate);
          } else if (workDateFrom && workDateTo) {
            Dates = generateDates(workDateFrom, workDateTo);
          }
    
          for (let i = 0; i < Dates.length; i++) {
            const result = new DateEntityModel({
              entityId: projectId,
              date: Dates[i],
              entityType: "work",
            }
            );
            await result.save();
          }
        } catch (error) {
          console.log(error);
        }   
        const data = await project.save();
        res.send({ status: "success", message: "project created" });
      } 
    }catch (error) {
        console.log(error);
      }};
    
    

export const listProject =async(req:Request,res:Response)=>{
    const useId = req.body.useId;
  try{
    const data=await ProjectModel.aggregate([
      {
        $match:{
           createdBy:useId,  
        }
        
      },
      {
        $lookup: {
          from: 'DateEntity', 
          localField: 'projectId',
          foreignField: 'entityId',
          as: 'Dates',
          pipeline: [
            {
              $project: {
                _id: 0,
                entityType: 1,
                date: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: 'LocationEntity', 
          localField: 'projectId',
          foreignField: 'entityId',
          as: 'Dates',
          pipeline: [
            {
              $project: {
                _id: 0,
                entityType: 1,
                date: 1,
              },
            },
          ],
        },
      },
    
    ])
    console.log(data)
    res.send({
      status: "success",
      message: "Projects successfully found",

  });
}
   catch (error) {
  res.send({ status: "failed", message:"something went wrong" });
}
}


export const deleteProject =async(req:Request,res:Response)=>{
    const projectId = req.body.projectId;
    try {
       
        const project =  await ProjectModel.findOneAndDelete(projectId);

        if(project===null) throw Error("project not forund")

        const Date = await DateEntityModel.deleteMany({ entityId: projectId });
        
        const deleteLocations = await LocationEntityModel.deleteMany({ entityId: projectId});

        res.send({status:"success",message:"deleted successfully"})
    }
     catch (error) {
      console.log(error)
    }
}

export const updateproject =async(req:Request,res:Response)=>{

}




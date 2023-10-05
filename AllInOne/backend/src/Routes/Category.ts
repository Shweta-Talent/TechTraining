import { Router } from "express";
import { categoryList } from "../Controllers/BLog";

const CategoryRouter:Router=Router()

CategoryRouter.get('/category',categoryList)

export default CategoryRouter
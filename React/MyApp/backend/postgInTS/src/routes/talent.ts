import { Router } from "express";
import {
  createTalent,
  deleteTalent,
  filterALlTalentByActive,
  filterALlTalentByGender,
  listALlTalent,
  update,
} from "../controllers/talent";

const talentRoute: Router = Router();

talentRoute.post("/listtalent", listALlTalent);
talentRoute.post("/createtalent", createTalent);
talentRoute.patch("/updatetalent", update);
talentRoute.delete("/deletetalent", deleteTalent);
talentRoute.get('/filterByActive',filterALlTalentByActive)
talentRoute.get('/filterByGender',filterALlTalentByGender)
export default talentRoute;

import express from "express";
import {
  DeleteData,
  getData,
  getDatasId,
  postdata,
  putData,
} from "../constroller.js";
const router = express.Router();
router.get("/", getData);
// router.get("/:rating", getDataById);
router.get("/:id", getDatasId);
router.post("/", postdata);
// router.get("/name/:name", getOne);
router.delete("/:id", DeleteData);
// router.get("/", add);
router.put("/:id", putData);
export default router;

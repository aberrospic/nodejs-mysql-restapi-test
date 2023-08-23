import { Router } from "express";
import { getEmployees } from "../controllers/employees.controllers.js";
import { postEmployees } from "../controllers/employees.controllers.js";
import { putEmployees } from "../controllers/employees.controllers.js";
import { deleteEmployees } from "../controllers/employees.controllers.js";
import { getEmployee } from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", postEmployees);

router.put("/employees", putEmployees);

router.delete("/employees/:id", deleteEmployees);

export default router;

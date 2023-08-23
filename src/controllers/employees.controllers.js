import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  throw new Error("DB ERROR");
  const [row] = await pool.query(`SELECT * FROM EMPLOYEE_DB`);
  res.send(row);
};

export const getEmployee = async (req, res) => {
  const [row] = await pool.query(`SELECT * FROM EMPLOYEE_DB WHERE id = ?`, [
    `${req.params.id}`,
  ]);

  if (row.length <= 0)
    return res.status(404).json({
      message: "Employee not found",
    });

  res.send(row[0]);
};

export const postEmployees = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO EMPLOYEE_DB (name, salary) VALUES (?, ?)",
    [`${name}`, `${salary}`]
  );
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

export const deleteEmployees = async (req, res) => {
  const [row] = await pool.query(`DELETE FROM EMPLOYEE_DB WHERE id = ?`, [
    `${req.params.id}`,
  ]);

  if (row.affectedRows <= 0)
    return res.status(404).json({
      message: "ID not found",
    });

  res.sendStatus(204);
};

export const putEmployees = (req, res) => res.send("Hola Mundo");

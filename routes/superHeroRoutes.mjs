import express from "express";
import { validarSuperheroe } from "../middlewares/validarSuperheroe.mjs";
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroePorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  insertarSuperheroeController,
  editarSuperheroeController,
  eliminarSuperheroePorIdController,
} from "../controllers/superheroesController.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("dashboard")
})
router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("/heroes/insertar", (req, res) => {
  res.render("addSuperheroe")
})
router.post("/heroes", validarSuperheroe, insertarSuperheroeController);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.put("/heroes/:id/editar", validarSuperheroe, editarSuperheroeController)
router.delete("/heroes/eliminar/:id", eliminarSuperheroePorIdController);

 router.get(
   "/heroes/buscar/:atributo/:valor",
   buscarSuperheroePorAtributoController
 );
// router.get(
//   "/heroes/consulta/mayores-30",
//   obtenerSuperheroesMayoresDe30Controller
// );

export default router;

import { Router } from "express";
export const torneo_routes = Router()
import { IRequest, IResponse } from "../interfaces";
//Controllers
import postFixuture from "./Controllers/postFixture";
import postTorneo from "./Controllers/postTorneo";

//utils
import deleteQueryById from "./Utils/deleteQueryById";
import getById from "./Utils/getById";
import getAll from "./Utils/getAll";
//Rutas
//Crear Torneo
torneo_routes.post("/torneo", async (req: IRequest, res: IResponse) => {
    const {nombre, periodo_inicio, periodo_inscripcion, division, categoria} = req.body
    await postTorneo(nombre, periodo_inscripcion, periodo_inicio, division, categoria)
    res.send("Torneo y Fixture creado.")
});
//Crear Fixture
torneo_routes.post("/fixture", async (req: IRequest, res: IResponse) => {
    const {fecha_inicio, division, categoria} = req.body
    await postFixuture(fecha_inicio, division, categoria, false)
    res.send("Fixture creada.")
});
import { Router } from "express";
export const partido_routes = Router()
import { IRequest, IResponse } from "../interfaces";
//Controllers
import postGol from "./Controllers/postGol";
import postTarjeta from "./Controllers/postTarjeta";

//utils
import deleteQueryById from "./Utils/deleteQueryById";
import getById from "./Utils/getById";
import getAll from "./Utils/getAll";
//Rutas
//Crear Gol
partido_routes.post("/gol", async (req:IRequest, res: IResponse) => {
    const {tiempo, asistencia, goleador, encuentro} = req.body
    await postGol(tiempo, asistencia, goleador, encuentro);
    res.send("Gol anotado.")
});
//Crear Tarjeta
partido_routes.post("/tarjeta", async (req:IRequest, res: IResponse) => {
    const {tiempo, tipo_tarjeta, jugador, encuentro} = req.body
    await postTarjeta(tiempo, tipo_tarjeta, jugador, encuentro);
    res.send("Tarjeta creada.")
});
//--------------------------GETTER--------------------------//
//Obtener los goles de un encuentro
partido_routes.get("/goles/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    const response = await getById("gol", "encuentro", parseInt(id))
    res.send(response)
});
//Obtener los goles de un encuentro
partido_routes.get("/tarjetas/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    const response = await getById("tarjeta", "encuentro", parseInt(id))
    res.send(response)
});
//Obtener todos los goles
partido_routes.get("/gol", async (req: IRequest, res: IResponse) => {
    const response = await getAll("gol")
    res.send(response)
});
//Obtener todas las tarjetas
partido_routes.get("/tarjeta", async (req: IRequest, res: IResponse) => {
    const response = await getAll("tarjeta")
    res.send(response)
});
//Obtener un gol por id
partido_routes.get("/gol/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    const response = await getById( "gol", "goldid",parseInt(id))
    res.send(response)
});
//Obtener una tarjeta por id
partido_routes.get("/tarjeta/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    const response = await getById( "tarjeta", "tarjetaid",parseInt(id))
    res.send(response)
});
//--------------------------ELIMINACION--------------------------//
partido_routes.delete("/gol/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    await deleteQueryById("gol", "goldid",parseInt(id))
    res.send("Gol eliminado.")
});
partido_routes.delete("/tarjeta/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    await deleteQueryById("tarjeta", "tarjetaid",parseInt(id))
    res.send("Tarjeta eliminada.")
});
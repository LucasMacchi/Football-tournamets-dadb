import { Router } from "express";
export const equipo_routes = Router()
import { IRequest, IResponse } from "../interfaces";
//COntrollers
import postTeam from "./Controllers/postTeam";
import postCancha from "./Controllers/postCancha";

//utils
import deleteQueryById from "./Utils/deleteQueryById";
import getById from "./Utils/getById";
import getAll from "./Utils/getAll";
//Rutas
//Crea Equipo
equipo_routes.post("/create", async (req: IRequest, res: IResponse) => {
    const {nombre, division, categoria, tecnico} = req.body
    await postTeam(nombre, division, categoria ,tecnico)
    res.send("Equipo Creado")
})
//Crea cancha
equipo_routes.post("/cancha", async (req: IRequest, res: IResponse) => {
    const {nombre, direccion} = req.body
    await postCancha(nombre,direccion)
    res.send("Cancha creada")
})
//--------------------------GETTER--------------------------//
//Obtener un equipo
equipo_routes.get("/one/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    const response = await getById( "equipo", "equipoid",parseInt(id))
    res.send(response)
})
//Obtener todos los equipos
equipo_routes.get("/all", async (req: IRequest, res: IResponse) => {
    const response = await getAll("equipo")
    res.send(response)
})
//Obtener todas las canchas
equipo_routes.get("/cancha/all", async (req: IRequest, res: IResponse) => {
    const response = await getAll("cancha")
    res.send(response)
})
//Obtener una cancha
equipo_routes.get("/cancha/one/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    const response = await getById( "cancha", "canchaid",parseInt(id))
    res.send(response)
})

//--------------------------ELIMINACION--------------------------//
//Elimina equipo
equipo_routes.delete("/delete/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    await deleteQueryById("equipo","equipoid",parseInt(id))
    res.send("Equipo eliminado")
})
//elimna cancha
equipo_routes.delete("/cancha/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    await deleteQueryById("cancha","canchaid",parseInt(id))
    res.send("Cancha eliminado")
})

import { Router } from "express";
export const equipo_routes = Router()
import { IRequest, IResponse } from "../interfaces";
//Controllers
import postTeam from "./Controllers/postTeam";
import postCancha from "./Controllers/postCancha";
import postIncripcion from "./Controllers/postIncripcion";
//utils
import deleteQueryById from "./Utils/deleteQueryById";
import getById from "./Utils/getById";
import getAll from "./Utils/getAll";
import divisionChecker from "./Utils/divisionCheck";
//Rutas
//Crea Equipo
equipo_routes.post("/create", async (req: IRequest, res: IResponse) => {
    try {
        const {nombre, division, categoria, tecnico} = req.body
        await postTeam(nombre, divisionChecker(division), categoria ,tecnico)
        res.send("Equipo Creado")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Crea cancha
equipo_routes.post("/cancha", async (req: IRequest, res: IResponse) => {
    try {
        const {nombre, direccion} = req.body
        await postCancha(nombre,direccion)
        res.send("Cancha creada")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Crear Inscripcion
equipo_routes.post("/inscripcion", async (req: IRequest, res: IResponse) => {
    try {
        const {equipo_id, torneo_id} = req.body
        await postIncripcion (equipo_id, torneo_id)
        res.send("Equipo inscripto.")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//--------------------------GETTER--------------------------//
//Obtner los jugadores dentro de un equipo
equipo_routes.get("/jugadores/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        const response = await getById( "jugador", "equipo",parseInt(id))
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Obtener un equipo
equipo_routes.get("/one/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        const response = await getById( "equipo", "equipoid",parseInt(id))
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Obtener todos los equipos
equipo_routes.get("/all", async (req: IRequest, res: IResponse) => {
    try {
        const response = await getAll("equipo")
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Obtener todas las canchas
equipo_routes.get("/cancha/all", async (req: IRequest, res: IResponse) => {
    try {
        const response = await getAll("cancha")
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Obtener una cancha
equipo_routes.get("/cancha/one/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        const response = await getById( "cancha", "canchaid",parseInt(id))
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})

//--------------------------ELIMINACION--------------------------//
//Elimina equipo
equipo_routes.delete("/delete/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        await deleteQueryById("equipo","equipoid",parseInt(id))
        res.send("Equipo eliminado")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//elimna cancha
equipo_routes.delete("/cancha/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        await deleteQueryById("cancha","canchaid",parseInt(id))
        res.send("Cancha eliminado")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})

import { Router } from "express";
export const personas_routes = Router()
import { IRequest, IResponse } from "../interfaces";
//COntrollers
import postTenico from "./Controllers/postTecnico";
import postJugador from "./Controllers/postJugador";
import postArbitro from "./Controllers/postArbitro";
import postTenicoEquipo from "./Controllers/postTecnicoEquipo";

//Utils
import deleteQueryById from "./Utils/deleteQueryById";
import getById from "./Utils/getById";
import getAll from "./Utils/getAll";
//Rutas
//Crea Tecnico y un equipo
personas_routes.post("/tecnico_equipo", async (req: IRequest, res: IResponse) => {
    try {
        const {nombre, apellido, direccion, telefono, nacimiento, nombre_equipo, division, categoria} = req.body
        await postTenicoEquipo(nombre, apellido, direccion, telefono, nacimiento, nombre_equipo, division, categoria)
        res.send("Tecnico y equipo creado")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Crea Tecnico
personas_routes.post("/tecnico", async (req: IRequest, res: IResponse) => {
    try {
        const {nombre, apellido, direccion, telefono, nacimiento} = req.body
        const response = await postTenico(nombre, apellido, direccion, telefono, nacimiento)
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Crea Jugador
personas_routes.post("/jugador", async (req: IRequest, res: IResponse) => {
    try {
        const {nombre, apellido, direccion, telefono, nacimiento, numero_socio, categoria, equipo} = req.body
        await postJugador(nombre, apellido, direccion, telefono, nacimiento,numero_socio, categoria, equipo)
        res.send("Jugador Creado")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Crea Arbitro
personas_routes.post("/arbitro", async (req: IRequest, res: IResponse) => {
    try {
        const {nombre, apellido, direccion, telefono, nivel_experiencia, certificado} = req.body
        await postArbitro(nombre, apellido, direccion, telefono, nivel_experiencia,certificado)
        res.send("Arbitro Creado")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//--------------------------GETTER--------------------------//
//Obtener todos los tecnicos
personas_routes.get("/tecnico/all", async (req: IRequest, res: IResponse) => {
    try {
        const response = await getAll("tecnico")
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Obtener un tecnico
personas_routes.get("/tecnico/one/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        const response = await getById("tecnico", "tecnico_pk", parseInt(id))
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Obtener todos los jugadores
personas_routes.get("/jugador/all", async (req: IRequest, res: IResponse) => {
    try {
        const response = await getAll("jugador")
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Obtener un jugador
personas_routes.get("/jugador/one/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        const response = await getById("jugador", "jugadorid", parseInt(id))
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Obtener todos los arbitros
personas_routes.get("/arbitro/all", async (req: IRequest, res: IResponse) => {
    try {
        const response = await getAll("arbitro")
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Obtener un arbitro
personas_routes.get("/arbitro/one/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        const response = await getById("arbitro", "arbitroid", parseInt(id))
        res.send(response)
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//--------------------------ELIMINACION--------------------------//
//Elimina Tecnico
personas_routes.delete("/tecnico/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        await deleteQueryById("tecnico","tecnico_pk",parseInt(id))
        res.send("Tenico ELiminado")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Elimina Jugador
personas_routes.delete("/jugador/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        await deleteQueryById("jugador","jugadorid",parseInt(id))
        res.send("Jugador ELiminado")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
//Elimina Arbitro
personas_routes.delete("/arbitro/:id", async (req: IRequest, res: IResponse) => {
    try {
        const id = req.params.id
        await deleteQueryById("arbitro","arbitroid",parseInt(id))
        res.send("Arbitro ELiminado")
    } catch (error) {
        if(error instanceof Error) res.status(404).send(error.message)
        else res.status(404).send("Error")
    }

})
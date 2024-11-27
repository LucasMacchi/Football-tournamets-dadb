import { Router } from "express";
export const torneo_routes = Router()
import { IRequest, IResponse } from "../interfaces";
//Controllers
import postFixuture from "./Controllers/postFixture";
import postTorneo from "./Controllers/postTorneo";
import createTorneo from "./Controllers/createTorneo";
import getTorneoCompleto from "./Controllers/getTorneoCompleto";
import getEquiposTorneo from "./Controllers/getEquiposTorneo";
//utils
import getById from "./Utils/getById";
import getAll from "./Utils/getAll";
import divisionChecker from "./Utils/divisionCheck";
-
//Rutas
//Crear Torneo
torneo_routes.post("/torneo", async (req: IRequest, res: IResponse) => {
    const {nombre, periodo_inicio, periodo_inscripcion, division, categoria} = req.body
    await postTorneo(nombre, periodo_inscripcion, periodo_inicio, divisionChecker(division), categoria)
    res.send("Torneo y Fixture creado.")
});
//Crear Fixture
torneo_routes.post("/fixture", async (req: IRequest, res: IResponse) => {
    const {fecha_inicio, division, categoria} = req.body
    await postFixuture(fecha_inicio, divisionChecker(division), categoria, false)
    res.send("Fixture creada.")
});
//Crear torneo Completo
torneo_routes.post("/torneo_completo", async (req: IRequest, res: IResponse) => {
    try {
        const {torneo_id, nro_ruedas} = req.body
        await createTorneo(torneo_id, nro_ruedas)
        res.send("Torneo entero creado.")
    } catch (error) {
        res.status(404).send("Error")
    }

});
//--------------------------GETTER--------------------------//
//Trae todos los equipos de un torneo
torneo_routes.get("/equipos/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    const response = await getEquiposTorneo(parseInt(id))
    res.send(response)
})
//Trae los torneos completos
torneo_routes.get("/torneo_completo", async (req: IRequest, res: IResponse) => {
    const response = await getTorneoCompleto()
    res.send(response)
})
//Trae todos los torneos
torneo_routes.get("/torneo", async (req: IRequest, res: IResponse) => {
    const response = await getAll("torneo")
    res.send(response)
})
//Trae todas las fixtures
torneo_routes.get("/fixture", async (req: IRequest, res: IResponse) => {
    const response = await getAll("fixture")
    res.send(response)
})
//Trae un torneo especifico
torneo_routes.get("/torneo/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    const response = await getById("torneo", "torneoid", parseInt(id))
    res.send(response)
})
//Trae una fixture especifica
torneo_routes.get("/fixture/:id", async (req: IRequest, res: IResponse) => {
    const id = req.params.id
    const response = await getById("fixture", "fixtureid", parseInt(id))
    res.send(response)
})
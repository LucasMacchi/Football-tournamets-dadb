//Importe de Rutas
import { personas_routes } from "./personasRoutes";
import { equipo_routes } from "./equipoRoutes";
import { partido_routes } from "./partidoRoutes";
import { torneo_routes } from "./torneo_routes";

//Router declaration
import { NextFunction, Router } from "express";
import { IRequest, IResponse } from "../interfaces";
import test_route from "./Controllers/testController";
import queryTest from "./Controllers/queryTest";
export const router = Router()

router.get("/categorias", async (req: IRequest, res: IResponse) => {
  const categorias = ["15-20","20-25","25-30","30-35","35-40","40-45","45-50"]
  res.send(categorias)
});
router.get("/divisiones", async (req: IRequest, res: IResponse) => {
  const divisiones = ["A","B","C","D"]
  res.send(divisiones)
});
//Ping
router.get('/ping', (_req: IRequest, res: IResponse) => {
  res.send(test_route("Global"))
})
//Test queries
router.get('/query', async (_req: IRequest, res: IResponse) => {
  const response = await queryTest()
  console.log(response)
  res.send(response)
})

//Routes
router.use("/persona", personas_routes)
router.use("/equipo", equipo_routes)
router.use("/partido", partido_routes)
router.use("/torneo", torneo_routes)

//Error handler

router.use((err: any, _req: IRequest, res: IResponse, _next:NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      error: {
        message: err.message,
      },
    });
});

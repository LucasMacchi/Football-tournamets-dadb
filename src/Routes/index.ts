//Importe de Rutas
import { personas_routes } from "./personasRoutes";
import { equipo_routes } from "./equipoRoutes";

//Router declaration
import { NextFunction, Router } from "express";
import { IRequest, IResponse } from "../interfaces";
export const router = Router()


//Routes
router.use("/persona", personas_routes)
router.use("/equipo", equipo_routes)

//Error handler

router.use((err: any, _req: IRequest, res: IResponse, _next:NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      error: {
        message: err.message,
      },
    });
});

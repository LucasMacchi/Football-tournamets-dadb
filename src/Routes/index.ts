//Importe de Rutas

//Router declaration
import { NextFunction, Router } from "express";
import { IRequest, IResponse } from "../interfaces";
export const router = Router()

//Error handler

router.use((err: any, _req: IRequest, res: IResponse, _next:NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      error: {
        message: err.message,
      },
    });
});

//Routes

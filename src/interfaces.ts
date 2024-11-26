import { Request, Response } from "express";

export interface IRequest extends Request{}
export interface IResponse extends Response{}

export interface IPersona {
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: number
}
export interface IArbitro extends IPersona {
    nivel_experiencia: string,
    certificado: boolean,
    arbitroid: number
}
export interface ICancha {
    canchaid: number,
    nombre: string,
    direccion: string
}


export type TDivisiones = "A" | "B" | "C" | "D"
export type TCategorias = "15-20" | "20-25" |"25-30" |"30-35" |"35-40" |"40-45" | "45-50"
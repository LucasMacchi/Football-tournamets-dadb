import { Request, Response } from "express";

export interface IRequest extends Request{}
export interface IResponse extends Response{}

export interface IPersona {
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: number
}
export interface IEquipo {
    equipoid: number,
    equipo_id: number,
    categoria: string,
    division: string,
    tecnico: number
}
export interface IRueda {
    fecha_inicio: Date,
    fixtureid: number,
    ruedaid: number
}
export interface IMatch {
    equipo_1: number,
    equipo_2: number,
    date: Date
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
export interface ITorneo {
    nombre: string,
    periodo_inscripcion: Date,
    periodo_inicio: Date,
    fixtureid:number,
    torneoid: number
}


export type TDivisiones = "A" | "B" | "C" | "D"
export type TCategorias = "15-20" | "20-25" |"25-30" |"30-35" |"35-40" |"40-45" | "45-50"
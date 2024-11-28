import QueryMaker from "../Utils/queryMaker";
import postFixuture from "./postFixture";

export default async function postTorneo (
    nombre: string, periodo_inscripcion: Date, periodo_inicio: Date,
    division: string, categoria: string
){
    const fixtureid = await postFixuture(periodo_inicio, division, categoria, true)
    const inscripcion = new Date(periodo_inscripcion)
    const inicio = new Date(periodo_inicio)
    const sql = `insert into public.torneo(nombre,periodo_inscripcion,periodo_inicio, fixtureid) 
    values ('${nombre}', '${inscripcion.toDateString()}', '${inicio.toDateString}','${fixtureid}')`
    QueryMaker(sql, false)
}
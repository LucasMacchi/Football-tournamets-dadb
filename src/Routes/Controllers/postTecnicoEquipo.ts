import { TCategorias, TDivisiones } from "../../interfaces";
import postTenico from "./postTecnico";
import postTeam from "./postTeam";

interface ITecnicoId {
    tecnico_pk: number
}
export default async function postTenicoEquipo (nombre: string, apellido: string, direccion: string, telefono: string, nacimiento: Date, 
    nombre_equipo: string, division: TDivisiones, categoria: TCategorias
){
    const tecnicoid:ITecnicoId = await postTenico(nombre, apellido, direccion, telefono ,nacimiento)
    await postTeam(nombre_equipo, division, categoria, tecnicoid.tecnico_pk)
}
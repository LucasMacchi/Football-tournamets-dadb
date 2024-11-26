import QueryMaker from "../Utils/queryMaker";
import { TDivisiones, TCategorias } from "../../interfaces";
export default async function postTeam (nombre: string, division: TDivisiones, categoria: TCategorias, tecnico: number) {
    const sql = `insert into public.equipo(nombre,division,categoria,tecnico) values ('${nombre}', '${division}', '${categoria}', '${tecnico}')`

    await QueryMaker(sql, false)

}
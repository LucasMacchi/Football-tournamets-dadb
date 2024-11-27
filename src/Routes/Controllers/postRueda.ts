import QueryMaker from "../Utils/queryMaker";
import getById from "../Utils/getById";
import { IEquipo, IRueda, IMatch } from "../../interfaces";
import postEncuentro from "./postEncuentro";

export default async function postRueda (fecha_inicio: Date, fixtureid: number, torneoid: number) {
    const equipos:Array<IEquipo> = await getById("inscripcion","torneo_id", torneoid)
    const sql = `insert into public.rueda(fecha_inicio,fixtureid) values ('${fecha_inicio.toDateString()}', '${fixtureid}') RETURNING ruedaid`
    const ruedaid:Array<IRueda> = await QueryMaker(sql, true)
    const partidos: Array<IMatch> = []
    let aux_date = fecha_inicio
    for(let i = 0; i < equipos.length; i++) {
        for(let j = i + 1; j < equipos.length; j++) {
            partidos.push({equipo_1: equipos[i].equipo_id,equipo_2: equipos[j].equipo_id, date: aux_date})
            aux_date = new Date(aux_date.setDate(aux_date.getDate() + 1))
            aux_date = new Date(aux_date.setHours(19,0,0))
        }
    }
    partidos.forEach(async p =>  {
        await postEncuentro(p.date, p.equipo_1, p.equipo_2, ruedaid[0].ruedaid)
    });
}
import QueryMaker from "../Utils/queryMaker";
import getAll from "../Utils/getAll";
import { IArbitro, ICancha } from "../../interfaces";
import randomNumber from "../Utils/randomNumber";

export default async function postEncuentro (fecha_hora: Date, equipo_1: number, equipo_2: number, rueda: number){
    const canchas:Array<ICancha> = await getAll("cancha")
    const arbitros:Array<IArbitro> = await getAll("arbitro")
    const cancha: ICancha = canchas[randomNumber(canchas.length)]
    const arbitro: IArbitro = arbitros[randomNumber(arbitros.length)]
    const date = new Date(fecha_hora)
    const sql = `insert into public.encuentro(fecha_hora,equipo_1,equipo_2,arbitro,cancha,rueda) 
    values ('${fecha_hora.toDateString()}', '${equipo_1}', '${equipo_2}', '${arbitro.arbitroid}', '${cancha.canchaid}','${rueda}')`
    QueryMaker(sql, false)
}
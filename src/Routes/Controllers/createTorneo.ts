import getById from "../Utils/getById";
import { ITorneo } from "../../interfaces";
import postRueda from "./postRueda";

export default async function createTorneo(torneo_id:number, nro_ruedas: number) {
    const torneo: Array<ITorneo> = await getById("torneo", "torneoid", torneo_id)
    let aux_date = torneo[0].periodo_inicio
    for (let i = 1; i <= nro_ruedas; i++) {
        await postRueda(aux_date,torneo[0].fixtureid,torneo[0].torneoid)
        aux_date = new Date(aux_date.setDate(aux_date.getDate() + 10))
    }
}
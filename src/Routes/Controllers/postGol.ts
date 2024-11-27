import QueryMaker from "../Utils/queryMaker";

export default async function postGol (tiempo: Date, asistencia: string, goleador: number, encuentro: number) {
    const sql = `insert into public.gol(tiempo,asistencia,goleador,encuentro) 
    values ('${tiempo}', '${asistencia}', '${goleador}', '${encuentro}')`

    await QueryMaker(sql, false)

}
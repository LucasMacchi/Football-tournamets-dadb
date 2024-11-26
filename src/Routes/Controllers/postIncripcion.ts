import QueryMaker from "../Utils/queryMaker";

export default async function postIncripcion (equipo_id: number, torneo_id: number) {
    const sql = `insert into public.inscripcion(equipo_id,torneo_id) 
    values ('${equipo_id}', '${torneo_id}')`
    
    await QueryMaker(sql, false)

}
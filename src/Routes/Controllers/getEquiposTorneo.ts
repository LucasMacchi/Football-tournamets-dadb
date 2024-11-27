import QueryMaker from "../Utils/queryMaker";
export default async function getEquiposTorneo (torneo_id: number) {
    const sql = `select e.equipoid, e.nombre, e.division from public.inscripcion i 
    inner join public.equipo e on i.equipo_id = e.equipoid where i.torneo_id  = ${torneo_id}`
    const equipos = await QueryMaker(sql, true)
    return equipos
}
//select e.equipoid, e.nombre, e.division from public.inscripcion i inner join public.equipo e on i.equipo_id = e.equipoid where i.torneo_id  = 1
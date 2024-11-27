import QueryMaker from "../Utils/queryMaker";

export default async function getTorneoCompleto() {
    const sql = `select t.nombre torneo ,fi.fixtureid , r.ruedaid, r.fecha_inicio, e2.nombre equipo_1 , e3.nombre equipo_2, c.nombre cancha, concat(a.nombre, ' ',a.apellido) arbitro_nombre  
from public.encuentro e 
inner join public.equipo e2 on e.equipo_1 = e2.equipoid  
inner join public.equipo e3 on e.equipo_2  = e3.equipoid
inner join cancha c ON e.cancha = c.canchaid 
inner join arbitro a on e.arbitro = a.arbitroid inner join rueda r on e.rueda = r.ruedaid
inner join fixture fi on r.fixtureid = fi.fixtureid
inner join torneo t on t.fixtureid = fi.fixtureid `
    const torneo = await QueryMaker(sql, true)
    return torneo
}


/*

select t.nombre ,fi.fixtureid , r.ruedaid, r.fecha_inicio, e2.nombre equipo_1 , e3.nombre equipo_2, c.nombre cancha, concat(a.nombre, ' ',a.apellido) arbitro_nombre  
from public.encuentro e 
inner join public.equipo e2 on e.equipo_1 = e2.equipoid  
inner join public.equipo e3 on e.equipo_2  = e3.equipoid
inner join cancha c ON e.cancha = c.canchaid 
inner join arbitro a on e.arbitro = a.arbitroid 
inner join rueda r on e.rueda = r.ruedaid
inner join fixture fi on r.fixtureid = fi.fixtureid
inner join torneo t on t.fixtureid = fi.fixtureid 

*/
import QueryMaker from "../Utils/queryMaker";

export default async function postTeam (nombre: string, division: string, categoria: string, tecnico: number) {
    const sql = `insert into public.equipo(nombre,division,categoria,tecnico) values ('${nombre}', '${division}', '${categoria}', '${tecnico}')`

    await QueryMaker(sql, false)

}
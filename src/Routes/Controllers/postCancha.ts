import QueryMaker from "../Utils/queryMaker";

export default async function postCancha (nombre: string, direccion: string) {
    const sql = `insert into public.cancha(nombre,direccion) values ('${nombre}', '${direccion}')`
    await QueryMaker(sql, false)

}
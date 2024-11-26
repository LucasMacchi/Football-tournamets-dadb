import QueryMaker from "../Utils/queryMaker";

export default async function postTenico (nombre: string, apellido: string, direccion: string, telefono: number, nacimiento: string) {
    const sql = `insert into public.tecnico(nombre,apellido,direccion,telefono,nacimiento) values ('${nombre}', '${apellido}', '${direccion}', '${telefono}','${nacimiento}')`

    await QueryMaker(sql, false)

}
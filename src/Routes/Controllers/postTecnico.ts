import QueryMaker from "../Utils/queryMaker";

export default async function postTenico (nombre: string, apellido: string, direccion: string, telefono: string, nacimiento: Date) {
    const nac = new Date(nacimiento)
    const sql = `insert into public.tecnico(nombre,apellido,direccion,telefono,nacimiento) 
    values ('${nombre}', '${apellido}', '${direccion}', '${telefono}','${nacimiento.toString()}') RETURNING tecnico_pk`

    const response = await QueryMaker(sql, true)
    return response[0]
}
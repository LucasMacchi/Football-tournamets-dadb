import QueryMaker from "../Utils/queryMaker";

export default async function postArbitro (nombre: string, apellido: string, direccion: string, telefono: string, 
    nivel_experiencia: number, certificado: boolean) {
    const sql = `insert into public.arbitro(nombre,apellido,direccion,telefono,nivel_experiencia,certificado) 
    values ('${nombre}', '${apellido}', '${direccion}', '${telefono}', '${nivel_experiencia}','${certificado}')`

    await QueryMaker(sql, false)

}
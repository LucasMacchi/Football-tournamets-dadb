import QueryMaker from "../Utils/queryMaker";

export default async function postJugador (nombre: string, apellido: string, direccion: string, telefono: string, 
                                            nacimiento: Date, numero_socio: number, categoria: string, equipo: number) {
    const sql = `insert into public.jugador(nombre,apellido,direccion,telefono,nacimiento,numero_socio,categoria,equipo) 
    values ('${nombre}', '${apellido}', '${direccion}', '${telefono}','${nacimiento.toString()}', '${numero_socio}','${categoria}','${equipo}')`

    await QueryMaker(sql, false)

}
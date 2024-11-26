import QueryMaker from "../Utils/queryMaker";

export default async function postTarjeta (tiempo: string, tipo_tarjeta: string, jugador: number, encuentro: number) {
    const sql = `insert into public.tarjeta(tiempo,tipo_tarjeta,jugador,encuentro) 
    values ('${tiempo}', '${tipo_tarjeta}', '${jugador}', '${encuentro}')`

    await QueryMaker(sql, false)

}
import QueryMaker from "../Utils/queryMaker";

export default async function postFixuture (fecha_inicio: string, division: string, categoria: string, returning: boolean){
    const sql = `insert into public.fixture(fecha_inicio,division,categoria) 
    values ('${fecha_inicio}', '${division}', '${categoria}') RETURNING fixtureid`
    const fixture = await QueryMaker(sql, true)
    if(returning) return fixture[0].fixtureid
}
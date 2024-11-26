import QueryMaker from "./queryMaker";

export default async function getById(table: string, pk_name: string, id: number) {
    const sql = `select * from public.${table} where ${pk_name} = ${id}`
    const res = await QueryMaker(sql, true)
    return res
}
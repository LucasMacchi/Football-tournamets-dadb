import QueryMaker from "./queryMaker";

export default async function deleteQueryById(table: string, pk_name: string, id: number) {
    const sql = `delete from public.${table} where ${pk_name} = ${id}`
    await QueryMaker(sql, false)
}
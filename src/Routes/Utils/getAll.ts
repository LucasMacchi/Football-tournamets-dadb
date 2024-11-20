import QueryMaker from "../Utils/queryMaker";

export default async function getAll(table: string) {
    const sql = "select * from public."+table+";"
    const res = await QueryMaker(sql, true)
    return res
}
import QueryMaker from "../Utils/queryMaker";

export default async function queryTest () {
    const sql = "SELECT current_database();"
    const res = await QueryMaker(sql, true)
    return res[0]
}
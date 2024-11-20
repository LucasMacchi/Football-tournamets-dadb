import pg, { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config()
const connectionString: string = process.env.POSTGRESQL_CONNECTION_STRING || "NO STRING PROVIDED"

export default async function QueryMaker(query: string, does_return: boolean): Promise<void | any> {
    const connection = new Client({connectionString})
    try {
        console.log(query)
        await connection.connect()
        const response = (await connection.query(query)).rows
        await connection.end()
        if(does_return) return response
        } catch (error) {
        console.log("Error al realizar la consulta SQL: ",error)
        await connection.end()
    }

}
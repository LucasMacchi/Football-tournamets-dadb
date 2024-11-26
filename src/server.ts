import express from "express";
import morgan from 'morgan';
import bodyParser from "body-parser";
import test_route from "./Routes/Controllers/testController";
import { IRequest, IResponse } from "./interfaces";
import queryTest from "./Routes/Controllers/queryTest";
import { router } from "./Routes";
const port = 4200
const server = express()

//Middlewares

server.use(morgan('dev'))
server.use(bodyParser.json())

//Para despues
server.use('/', router)

export default function(): void {
    try {
        if(!port) throw new Error("Error de Puerto")
        server.listen(port, () => console.log("----------------SERVER IS UP AT PORT "+port+"----------------"))
    } catch (error) {
        console.log("An error had happen trying to connect the Server: ",error) 
    }
}
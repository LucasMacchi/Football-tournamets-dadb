import server from "./server";


const start = async () => {
    try {
        server()
    } catch (error) {
        console.log("Error a conectar", error )
    }
}

start()
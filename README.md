# Football-tournamets-dadb

Base de datos y servidor hecho por Lucas Macchi. Es parte de un proyecto final para la materia "diseño y administracion de base de datos".

# ENDPOINTS

- GET /query
    Realiza una query a la base de datos para comprobar el funcionamiento, devuelve el nombre
- GET /ping
    Pingea al servidor
- GET /divisiones
    Devuelve todas las divisiones
- GET /categorias
    Devuelve todas las categorias

## PERSONAS ENDPOINTS

- POST /persona/tecnico_equipo
    body {nombre: string, apellido: string, direccion: string, telefono: string, nacimiento: fecha, nombre_equipo: string, division: string, categoria: string}
    Crea un tecnico y con el id del mismo, un equipo.
- POST /persona/tecnico  
    body {nombre:string, apellido:string, direccion:string, telefono: string, nacimiento: string}
    Crea un tecnico y devuelve su clave primaria
- POST /persona/jugador
    body {nombre:string, apellido:string, direccion:string, telefono: string, nacimiento: string, numero_socio: numero, categoria: string, equipo: id del equipo}
    Crea un Jugador
- POST /persona/arbitro
    body {nombre:string, apellido:string, direccion:string, telefono: string, nivel_experiencia: string, certificado: booleano}
    Crea un arbitro

- GET /persona/tecnico/all
    Devuelve todos los tecnicos
- GET /persona/tecnico/one/:id
    Se le pasa un id y devuelve ese tecnico
- GET /persona/jugador/all
    Devuelve todos los jugadores
- GET /persona/jugador/one/:id
    Se le pasa un id y devuelve ese jugador
- GET /persona/arbitro/all
    Devuelve todos los arbitros
- GET /persona/arbitro/one/:id
        Se le pasa un id y devuelve ese arbitro

-DELETE /persona/tecnico/:id
    Elimina un tecnico usando un id
-DELETE /persona/jugador/:id
    Elimina un jugador usando un id
-DELETE /persona/arbitro/:id
    Elimina un arbitro usando un id

## EQUIPO ENDPOINTS

- POST /equipo/create
    body {nombre:string, division:string, categoria:string, tecnico: id de tecnico}
    Crea un equipo
- POST /equipo/cancha
    body {nombre:string, direccion:string}
    Crea una cancha
- POST /equipo/inscripcion
    body {equipo_id: id del equipo, torneo_id: id del torneo}
    Inscribe un equipo a un torneo

- GET /jugadores/:id
    Usando el id de un equipo, este devuelve todos los jugadres que pertenecen al mismo
- GET /equipo/one/:id
    Trae un equipo usando un id
- GET /equipo/all
    Trae todos los equipos
- GET /equipo/cancha/all
    Trae todas la canchas
- GET /equipo/cancha/one/:id
    Trae una cancha usando un id

- DELETE /equipo/delete/:id
    Elimina un equipo usando su id
- DELETE /equipo/cancha/:id
    Elimina una cancha usando su id

## PARTIDO ENDPOINTS

- POST /partido/gol
    body {tiempo: string, asistencia: id_jugador, goleador: id_jugador, encuentro: id_encuentro}
    Crea un gol
- POST /partido/tarjeta
    body {tiempo: string, tipo_tarjeta: string, jugador: id_jugador, encuentro: id_encuentro}
    Crea una tarjeta

- GET /partido/goles/:id
    Usando el id de un encuentro, devuelve todos los goles hechos en el encuentro
- GET /partido/tarjetas/:id
    Usando el id de un encuentro, devuelve todas las tarjetas hechas en el encuentro
- GET /partido/gol/:id
    Trae un gol usando un id
- GET /partido/gol
    Trae todos los goles
- GET /partido/tarjeta
    Trae todas las tarjetas
- GET /partido/tarjeta/:id
    Trae una tarjeta usando un id

- DELETE /partido/gol/:id
    Elimina un equipo usando su id
- DELETE /partido/tarjeta/:id
    Elimina una cancha usando su id

## TORNEO ENDPOINTS

- POST /torneo/torneo
    body {nombre:string, periodo_inicio:string, periodo_inscripcion:string, division:string, categoria:string}
    Crea un torneo junto a su fixture, que empieza en el periodo de inicio.
- POST /torneo/fixture
    body {fecha_inicio:string, division:string, categoria:string}
    Crea un fixture
- POST /torneo/torneo_completo
    body {torneo_id: numero, nro_ruedas}
    Crea una cantidad de ruedas y los encuentros dentro de la misma

- GET /torneo/equipos/:id
    Con el id de un torneo, trae todos los equipos incriptos al mismo, junto con su nombre y division
- GET /torneo/torneo_completo
    Devuelve todas las ruedas y sus encuentros de todos los fixtures y torneos
- GET /torneo/torneo
    Trae todos los torneos
- GET /torneo/fixture
    Trae todas las fixtures
- GET /torneo/torneo/:id
    Trae un torneo usando su id
- GET /torneo/fixture/:id
    Trae un solo fixutre, usando su id
const express = require("express")//se importa libreria para usarla

const cors = require("cors")//desabilite posibles errores relacionados con cors

const app = express()//creamos una aplicacion con express.js
//añadiendo comentario
app.use(cors())
app.use(express.json())//habilite la capacidad de recibir contenido post

const jugadores = []
 
class Jugador {
  constructor(id) {
    this.id = id
  }

  asignarMokepon(mokepon) {
    this.mokepon = mokepon
  }
  actualizarPosicion(x,y) {
    this.x = x
    this.y = y
  }
}

class Mokepon {
  constructor(nombre) {
    this.nombre = nombre
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`

const jugador = new Jugador(id)

jugadores.push(jugador)

res.setHeader("Access-Control-Allow-Origin", "*")//*cualquier origen valido

    res.send(id)
})//cuando reciba una peticion en la url raiz diga hola

app.post("/mokepon/:jugadorId", (req,res) => {
  const jugadorId = req.params.jugadorId || ""
  const nombre= req.body.mokepon || ""
  const mokepon = new Mokepon(nombre)
  
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
  
  if(jugadorIndex >= 0){
    jugadores[jugadorIndex].asignarMokepon(mokepon)
  }

  console.log(jugadores)
  console.log(jugadorId)
  res.end()
})

app.post("/mokepon/:jugadorId/posicion", (req, res) =>{
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
  
    if(jugadorIndex >= 0){
      jugadores[jugadorIndex].actualizarPosicion(x,y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id )

    res.send({
      enemigos
    }) 
})

app.listen(8080, () => {
    console.log("Servidor Funcionando")
})//que escuche continuamente peticiones de clientes en el puerto 8080


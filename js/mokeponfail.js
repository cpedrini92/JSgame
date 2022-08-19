//ESTE ES EL EDITOR DE CÓDIGO
const botonMascotaJugador = document.getElementById("boton-mascota")//llamando al elemento de boton de HTML
const botonFuego = document.getElementById("boton-Fuego")
const botonAgua = document.getElementById("boton-Agua")
sectionSeleccionarReiniciar = document.getElementById("boton-reiniciar")
const botonTierra = document.getElementById("boton-Tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")//parte del DOM

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")


let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let mascotaJugador
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon{
    constructor(nombre, foto, vida){
    this.nombre = nombre 
    this.foto = foto
    this.vida = vida
    this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge","./assets/mokepons_mokepon_hipodoge_attack.png", 5 )

let capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5)

let ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5)

mokepones.push(hipodoge, capipepo, ratigueya)

hipodoge.ataques.push( 
    {nombre: "💧", id:"boton-Agua"},
    {nombre: "💧", id:"boton-Agua"},
    {nombre: "💧", id:"boton-Agua"},
    {nombre: "🔥", id:"boton-Fuego"},
    {nombre: "🌱", id:"boton-Tierra"},
)

capipepo.ataques.push( 
    {nombre: "🌱", id:"boton-Tierra"},
    {nombre: "🌱", id:"boton-Tierra"},
    {nombre: "🌱", id:"boton-Tierra"},
    {nombre: "💧", id:"boton-Agua"},
    {nombre: "🔥", id:"boton-Fuego"},
)

ratigueya.ataques.push( 
    {nombre: "🔥", id:"boton-Fuego"},
    {nombre: "🔥", id:"boton-Fuego"},
    {nombre: "🔥", id:"boton-Fuego"},
    {nombre: "💧", id:"boton-Agua"},
    {nombre: "🌱", id:"boton-Tierra"},

)

mokepones.push(hipodoge, capipepo, ratigueya,)

function iniciarJuego() {//FUNCION iniciarJuego, cuando termina de cargar el HTML
    
   sectionSeleccionarAtaque.style.display = "none"

   mokepones.forEach((mokepon) => {//forEach para iterar por cuantos elementos haya en el arreglo (mokepon)
    opcionDeMokepones =      `
    <input type="radio"name="mascota" id=${mokepon.nombre} />
    <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
         <p>${mokepon.nombre}</p>
         <img src =${mokepon.foto} alt=${mokepon.nombre}>
    </label>
    `
//por cada elemento"mokepon" genera esta estructura de HTML e inyecta en HTML, de forma automatica.

 contenedorTarjetas.innerHTML += opcionDeMokepones //para que pase de una pagina estatica a una dinamica(cambia con JS)

 inputHipodoge = document.getElementById("Hipodoge")
 inputCapipepo = document.getElementById("Capipepo")
 inputRatigueya = document.getElementById("Ratigueya")

})

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)//al darle click llamamos la funcion elegir mascota 
    
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)

}
//addEventlistener, es un escuchador que indica al navegador que este atento a la interacción del usuario.

function seleccionarMascotaJugador() {//input de todas las opciones a elegir

   sectionSeleccionarMascota.style.display = "none" //**NO FUNCIONA ESTA FUNCION**
   
    //let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

  
    if (inputHipodoge.checked) {//alertas correspondiente a las input(mascotas) elegidas
        spanMascotaJugador.innerHTML = inputHipodoge.id //DOM para que aparesca el nombre de la mascota seleecionada
        mascotaJugador = inputHipodoge.id //extraer nombre,guardar y luego buscar nombrem en los objetos y extraer ataques 
    } 
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id //se imprime en HTML el nombre acorde al .id
        mascotaJugador = inputCapipepo.id //guarda para usar en otra funcion
    }
    else if (inputRatigueya.checked) {//inputNombre.id fuente de verdad
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } 
    else {
        alert("Selecciona una Macota")  
 } 
           extraerAtaques(mascotaJugador)
           seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
      let ataques //variable interna
      for (let i = 0; i < mokepones.length; i++) {
           if (mascotaJugador === mokepones[i], nombre){
            ataques = mokepones[i].ataques
        }
      }  //iteracion
      mostrarAtaques(ataques)
}

function seleccionarMascotaEnemigo(){
let mascotaAleatorio = aleatorio(0, mokepones.length - 1)//rango infinito

spanMascotaEnemigo.innerHTML = mokepones [mascotaAleatorio].nombre
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
   ataqueAleatorioEnemigo()}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()}

function ataqueAleatorioEnemigo(){
   let ataqueAleatorio = aleatorio (1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else if (ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA"
    }

combate() 
}
 
// COMBATE
function combate(){


    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")}
       else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" ){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
       else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" ){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo}
       else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA" ){
       crearMensaje("GANASTE")
       vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo}
       else {
        crearMensaje("PERDISTE")
        vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador}

    revisarVidas()
       

    //despues de cada combate se revisan las vidas
    function revisarVidas(){
        if(vidasEnemigo == 0){
            crearMensajeFinal("FELICITACIONES! Ganaste :)")
        } else if (vidasJugador == 0){
            crearMensajeFinal("Lo Siento, Perdiste :(")
        } 
    }

}
    
function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
   
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//resultado FINAL

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
      botonTierra.disabled = true
    sectionSeleccionarReiniciar.style.display = "block"
}

function reiniciarJuego(){
location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+min)}

window.addEventListener("load", iniciarJuego)//cuando termina de cargar el HTML

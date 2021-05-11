console.log(`\nTrabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18
const estaAcompanhada = false
let temPassagemComprada = false 
const destino = "Rio de Janeiro"

console.log("Destinos possvíeis: ")
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18||estaAcompanhada == true
let contador = 0
let destinoExiste = false

//loop While
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true
        break
     }
    contador += 1
 }
console.log("Qual destino escolhido:", destino)
console.log(`O destino ${destino} existe? ${destinoExiste}`)

//loop FOR
//for(let cont = 0; cont < 3; cont++){
//   if(listaDeDestinos[contador] == destino){
//       destinoExiste = true
//      break
//     }
//}
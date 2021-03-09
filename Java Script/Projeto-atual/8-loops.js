console.log(`\nTrabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18
const estaAcompanhada = false
let temPassagemComprada = false     

console.log("\n Destinos possvíeis: ")
console.log(listaDeDestinos)

if (idadeComprador >= 18||estaAcompanhada == true) {
    console.log("Boa Viagem!")
    listaDeDestinos.splice(2, 1) // Retirando item da lista
    temPassagemComprada = true
}
else {
    console.log("Comprador não é maior de idade e não posso vender")
    temPassagemComprada = false
}

console.log("Embarcando \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!")
}else{
    console.log("Voce não pode embarcar")
}

console.log(listaDeDestinos)
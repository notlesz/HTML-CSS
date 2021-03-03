console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18
const estaAcompanhada = false
const temPassagemComprada = true

console.log("Destinos possvíeis: ")
console.log(listaDeDestinos)

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1,1) // Retirando item da lista

// }
// else if(estaAcompanhada){
//     //Menor de idade
//         console.log("Comprador está acompanhada")
//         listaDeDestinos.splice(1,1) // Retirando item da lista
//     }else{
//     console.log("Comprador não é maior de idade e não posso vender")
//     }

if (idadeComprador >= 18||estaAcompanhada == true) {
    console.log("Boa Viagem!")
    listaDeDestinos.splice(2, 1) // Retirando item da lista
}
else {
    console.log("Comprador não é maior de idade e não posso vender")
}

console.log("Embarcando \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!")
}else{
    console.log("Voce não pode embarcar")
}

console.log(listaDeDestinos)


console.log(`Trabalhando com listas`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`) // Adicionando itens a lista

console.log("Destinos possvíeis: ")
console.log(listaDeDestinos)
// console.log(salvador)
// console.log(saoPaulo)
// console.log(rioDeJaneiro)

listaDeDestinos.splice(1,2)
console.log(listaDeDestinos)
console.log(listaDeDestinos[1], listaDeDestinos[0])

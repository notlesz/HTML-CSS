console.log("Boletim Escolar")
const nomeAluno = "Elton Santos de Souza"

const nota1 = 1
const nota2 = 1
const nota3 = 1
const nota4 = 1

let media
media = (nota1+nota2+nota3+nota4)/4
console.log(nomeAluno)
if(media < 2){
    console.log(`Sua média anual foi: ${media} ponto`)
    console.log("Está reprovado")
}
if(media >=2 && media < 7){
    console.log(`Sua média anual foi: ${media} pontos`)
    console.log("Está de recuperação")
}
if(media >= 7){
    console.log(`Sua média anual foi: ${media} pontos`)
    console.log("Passou de ano, parabéns!")
}

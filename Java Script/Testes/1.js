console.log("Boletim Escolar")
nomeAluno = "Elton Santos de Souza"

const nota1 = 2
const nota2 = 2
const nota3 = 2
const nota4 = 2

let media
media = (nota1+nota2+nota3+nota4)/4

if(media < 2){
    console.log(`Sua média anual foi: ${media} ponto`)
    console.log("Está reprovado")
}
if(media >=2,media < 7){
    console.log(`Sua média anual foi: ${media} pontos`)
    console.log("Está de recuperação")
}
if(media >= 7){
    console.log(`Sua média anual foi: ${media} pontos`)
    console.log("Passou de ano, parabéns!")
}

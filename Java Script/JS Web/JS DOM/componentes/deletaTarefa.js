const BotaoDeleta = () =>{
    const botaDeleta = document.createElement('button')
    botaDeleta.classList.add('delete-button')
    botaDeleta.innerText = 'deletar'

    botaDeleta.addEventListener('click', deletarTarefa)

    return botaDeleta
}
const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target

    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta
}
export default BotaoDeleta
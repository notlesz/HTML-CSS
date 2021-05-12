import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

    const criarTarefa = (evento) => {
        evento.preventDefault()
    
        const input = document.querySelector('[data-form-input]')
        const valor = input.value

        const lista = document.querySelector('[data-list]')
    
        const tarefa = document.createElement('li')
        tarefa.classList.add('task')

        const conteudo = `<p class="content">${valor}</p>`
        tarefa.innerHTML = conteudo
        lista.appendChild(tarefa)

        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        input.value = ' '
    }

    const novaTarefa = document.querySelector('[data-form-button]')

    novaTarefa.addEventListener('click', criarTarefa)
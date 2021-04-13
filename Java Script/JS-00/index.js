import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
// import{ContaCorrente} from "./Conta/ContaCorrente.js"
// import {ContaPoupanca} from "./Conta/ContaCorrente.js"
// import {ContaSalario} from "./Conta/ContaSalario.js"

const diretor = new Diretor("Rodrigo", 10000, 123456789)
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Ricardo", 5000, 123456987)
gerente.cadastrarSenha("123456")
const cliente = new Cliente("Elton", 112121212121, "1234567")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123456")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234567")


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)
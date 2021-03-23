import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()
cliente1.nome="Elton"
cliente1.cpf=11212391209


const cliente2 = new Cliente()
cliente2.nome="Souza"
cliente2.cpf=12365478901

const conta1 = new ContaCorrente()
conta1.agencia = 1101
conta1.cliente = cliente1
conta1.depositar(500)

const conta2 = new ContaCorrente()
conta2.agencia = 1101
conta2.cliente = cliente2


conta1.transferir(100,conta2)
console.log(conta1)
console.log(conta2)














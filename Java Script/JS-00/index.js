import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Elton", 11212391209)

const cliente2 = new Cliente("Souza", 12365478901 )

const conta1 = new ContaCorrente(cliente1, 1101)
conta1.depositar(500)

const conta2 = new ContaCorrente(cliente2, 1101)


// conta1.transferir(200,conta2)
// console.log(conta1)
// console.log(conta2)

console.log(ContaCorrente.numeroDeContas)
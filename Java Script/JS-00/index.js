import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
const cliente1 = new Cliente("Elton", 11212391209)

const contaCC = new ContaCorrente(cliente1, 1101)
contaCC.depositar(500)

const contaPP = new ContaPoupanca(50, cliente1, 1101)

contaCC.sacar(100)
contaPP.sacar(10)

console.log(contaCC)
console.log(contaPP)
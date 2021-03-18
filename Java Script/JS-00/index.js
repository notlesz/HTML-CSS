class Cliente {
    nome;
    cpf;
}
class ContaCorrente{
    agencia;
    //#saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor
        }
    }

}

const cliente1 = new Cliente()
cliente1.nome="Elton"
cliente1.cpf=11212391209


const cliente2 = new Cliente()
cliente2.nome="Karen"
cliente2.cpf=12365478901

const contaCorrenteElton = new ContaCorrente()
contaCorrenteElton.agencia = 1101

contaCorrenteElton.depositar(100)
contaCorrenteElton.sacar(50)
console.log(contaCorrenteElton)



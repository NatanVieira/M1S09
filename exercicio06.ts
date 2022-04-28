class Conta {
    protected numero: number;
    protected saldo: number;
    protected estaAtiva: boolean;
    protected dono: string;

    constructor(numero: number, saldo: number, estaAtiva: boolean, dono: string){
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = dono;
    }
}

class ContaEmpresa extends Conta{
    private limiteDeDeposito: number = 1000;

    constructor(numero: number, saldo: number, estaAtiva: boolean, dono: string){
        super(numero,saldo,estaAtiva,dono);
    }

    deposito(valor:number){
        if(valor <= this.limiteDeDeposito)
            this.saldo += valor;
    }

    imprimeValorConta(){
        console.log(`Saldo: R$${this.saldo}`);
    }
}

let contaEmpresa = new ContaEmpresa(1234,0,true,'Eu');

contaEmpresa.deposito(1000);
contaEmpresa.deposito(1000);
contaEmpresa.deposito(1000);
contaEmpresa.deposito(500);

contaEmpresa.imprimeValorConta();
console.log(contaEmpresa);
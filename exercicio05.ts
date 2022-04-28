class Animal {
    nome: string;
    raca: string;
    corPelagem: string;
    peso: number;

    constructor(nome: string, raca: string, corPelagem: string, peso: number){
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso;
    }
}

let cachorro = new Animal('bob','cachorro','caramelho',10);

console.log(cachorro);
var Animal = /** @class */ (function () {
    function Animal(nome, raca, corPelagem, peso) {
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso;
    }
    return Animal;
}());
var cachorro = new Animal('bob', 'cachorro', 'caramelho', 10);
console.log(cachorro);

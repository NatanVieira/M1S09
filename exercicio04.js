var Filme = /** @class */ (function () {
    function Filme() {
        this.nome = '';
        this.anoDeLancamento = 2000;
        this.diretor = '';
    }
    return Filme;
}());
var filme = new Filme();
filme.nome = 'John Wick 3: Parabellum';
filme.anoDeLancamento = 2019;
filme.diretor = 'Alguém';
console.log(filme);

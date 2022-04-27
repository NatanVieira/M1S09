class Filme {
    nome:string = '';
    anoDeLancamento:number = 2000;
    diretor:string = '';
}

let filme = new Filme();

filme.nome = 'John Wick 3: Parabellum';
filme.anoDeLancamento = 2019;
filme.diretor = 'Alguém';

console.log(filme);
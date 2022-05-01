
export class Aluno {
    private nome: string;
    private matricula: number;
    public passou: boolean;

    constructor(nome: string, matricula:number){
        this.nome = nome;
        this.matricula = matricula;
        this.passou = false;
    }

    aprovado(media:number) {
        if(media >=7){
            this.passou = true;
        }else{
            this.passou = false;
        }
        return this.passou;
    }
}

export interface Nota {
    cadeira: string;
    ponto: number;
    aluno: Aluno;
}
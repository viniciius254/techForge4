// ATIVIDADE TRILHA 2

// EX 1

class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(deposito: number): void {
        this.saldo = this.saldo + deposito;
    }
    sacar(saque: number) {
        this.saldo = this.saldo - saque;
    }
}

// EX2 

class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    ler(): void{
        this.lido = true;
    } 
}

let gunco = new Livro (
    "As alegorias de Gunçolas",
    "Geovani",
    9
)
console.log(gunco)

gunco.ler()

console.log(gunco)

// EX 3

class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    cal(): number {
        return this.preco * this.quantidade;
    }
    }

    // EX 4

    class temperatura {
        celsius: number;

        constructor(celsius:number){
            this.celsius = celsius;
        }

        conversao(){
            return (this.celsius * 1.8) + 32;
        }
    } 

    class Agenda{
        compromissos: string[];

        constructor(compromissos:string[]){
            this.compromissos = compromissos;
        }

        add(novoComp:string) {
            this.compromissos.push(novoComp);
        }

    }

    let agenda = new Agenda(["dmwo","ncsvis","navdin"])

    console.log(agenda)


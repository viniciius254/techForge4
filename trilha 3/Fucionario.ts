abstract class Fucionario {
    private nome: string
    private salario: number

    constructor(nome: string, salario:number){
        this.nome = nome;
        this.salario = salario
    }

    abstract calcularBonus(): number;

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }
}

class Gerente extends Fucionario{
    constructor(nome:string, salario:number){
        super(nome, salario)
    }

    calcularBonus(): number {
     return this.getSalario() * 0.10 ;
    }

}

class Operario extends Fucionario{

   constructor(nome:string, salario:number){
        super(nome, salario)
    }

    calcularBonus(): number {
    return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const salarioComBonus = funcionario.getSalario() + funcionario.calcularBonus();
        console.log(`${funcionario.getNome()} - Salário com bônus: R$ ${salarioComBonus.toFixed(2)}`);
    });
}


const gerente = new Gerente('Jamil', 5000);
const operario = new Operario('Luis', 2500);

const funcionarios: Funcionario[] = [gerente, operario];

calcularSalarioComBonus(funcionarios);
export abstract class Funcionario {
    private nome: string;
    private matricula: string;
    private salario: number;

    constructor(nome: string, matricula: string, salarioInicial: number) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = 0;
        this.setSalario(salarioInicial);
    }

    public getNome(): string {
        return this.nome;
    }

    public getMatricula(): string {
        return this.matricula;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setMatricula(matricula: string): void {
        this.matricula = matricula;
    }

    public setSalario(novoSalario: number): boolean {
        if (novoSalario > this.salario && novoSalario > 0) {
            this.salario = novoSalario;
            return true;
        }
        return false;
    }

    public abstract calcularBonus(): number;
}
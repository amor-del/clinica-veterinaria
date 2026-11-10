import { Funcionario } from './Funcionario';

export class Recepcionista extends Funcionario {
    private agendamentosConfirmados: number;
    private readonly BONUS_POR_AGENDAMENTO: number = 15.0;

    constructor(nome: string, matricula: string, salario: number) {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = 0;
    }

    public agendarAtendimento(): void {
        this.agendamentosConfirmados++;
        console.log("Atendimento agendado com sucesso!");
    }

    public getAgendamentosConfirmados(): number {
        return this.agendamentosConfirmados;
    }

    public setAgendamentosConfirmados(agendamentos: number): void {
        this.agendamentosConfirmados = agendamentos;
    }

    public calcularBonus(): number {
        return this.agendamentosConfirmados * this.BONUS_POR_AGENDAMENTO;
    }
}
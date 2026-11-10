import { Funcionario } from './Funcionario';
export declare class Recepcionista extends Funcionario {
    private agendamentosConfirmados;
    private readonly BONUS_POR_AGENDAMENTO;
    constructor(nome: string, matricula: string, salario: number);
    agendarAtendimento(): void;
    getAgendamentosConfirmados(): number;
    setAgendamentosConfirmados(agendamentos: number): void;
    calcularBonus(): number;
}
//# sourceMappingURL=Recepcionista.d.ts.map
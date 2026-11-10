import { Animal } from './Animal';
import { Veterinario } from './Veterinario';

export class Consulta {
    private animal: Animal;
    private veterinario: Veterinario;
    private data: string;
    private motivo: string;

    constructor(animal: Animal, veterinario: Veterinario, data: string, motivo: string) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
        this.motivo = motivo;
    }

    // Getters
    public getAnimal(): Animal {
        return this.animal;
    }

    public getVeterinario(): Veterinario {
        return this.veterinario;
    }

    public getData(): string {
        return this.data;
    }

    public getMotivo(): string {
        return this.motivo;
    }

    // Setters
    public setAnimal(animal: Animal): void {
        this.animal = animal;
    }

    public setVeterinario(veterinario: Veterinario): void {
        this.veterinario = veterinario;
    }

    public setData(data: string): void {
        this.data = data;
    }

    public setMotivo(motivo: string): void {
        this.motivo = motivo;
    }

    public realizarConsulta(): void {
        console.log(`--- Realizando Consulta ---`);
        console.log(`Data: ${this.data}`);
        console.log(`Animal: ${this.animal.getNome()} (${this.animal.getTutor()})`);
        console.log(`Veterinário(a): ${this.veterinario.getNome()}`);
        console.log(`Motivo: ${this.motivo}`);
        
        // Emite o som do animal usando polimorfismo!
        process.stdout.write("Som do animal: ");
        this.animal.emitirSom();
        
        // Incrementa a consulta para o veterinário ganhar o bônus
        this.veterinario.incrementarConsulta();
        console.log(`Consulta finalizada e bônus atualizado!\n`);
    }
}
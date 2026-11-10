import { Cachorro } from './src/models/Cachorro';
import { Gato } from './src/models/Gato';
import { Ave } from './src/models/Ave';
import { Veterinario } from './src/models/Veterinario';
import { Recepcionista } from './src/models/Recepcionista';
import { Consulta } from './src/models/Consulta';

console.log("=== SISTEMA DA CLÍNICA VETERINÁRIA ===");

// 1. Criando animais
const meuCachorro = new Cachorro("Rex", 5, "Carlos");
const meuGato = new Gato("Mimi", 3, "Ana");
const minhaAve = new Ave("Loro", 2, "João");

// 2. Criando funcionários
const vet = new Veterinario("Dr. Roberto", "VET123", 4000);
const recepcionista = new Recepcionista("Maria", "REC456", 2500);

// 3. Testando encapsulamento e validação de salário
console.log(`\nSalário inicial do Vet: R$ ${vet.getSalario()}`);
const tentativa1 = vet.setSalario(3000); // Deve falhar porque é menor que o atual
console.log(`Tentou baixar o salário? ${tentativa1 ? "Sim" : "Não (Regra de negócio funcionou!)"}`);

const tentativa2 = vet.setSalario(4500); // Deve aceitar porque é maior
console.log(`Novo salário do Vet após aumento válido: R$ ${vet.getSalario()}`);

// 4. Agendando atendimento com a recepcionista
console.log("\n--- Recepção ---");
recepcionista.agendarAtendimento();
recepcionista.agendarAtendimento();

// 5. Realizando consultas (Polimorfismo em ação!)
console.log("\n--- Consultas ---");
const consulta1 = new Consulta(meuCachorro, vet, "10/06/2026", "Check-up geral");
consulta1.realizarConsulta();

const consulta2 = new Consulta(meuGato, vet, "10/06/2026", "Vacinação");
consulta2.realizarConsulta();

// 6. Calculando bônus dos funcionários
console.log("--- Bônus e Fechamento ---");
console.log(`Consultas realizadas pelo(a) ${vet.getNome()}: ${vet.getConsultasRealizadas()}`);
console.log(`Bônus do Veterinário: R$ ${vet.calcularBonus()}`);
console.log(`Bônus da Recepcionista: R$ ${recepcionista.calcularBonus()}`);
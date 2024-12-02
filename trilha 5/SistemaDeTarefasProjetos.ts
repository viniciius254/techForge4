
abstract class GerenciadorDeTarefas {
    abstract adicionarTarefa(tarefa: string): void;
    abstract listarTarefas(): string[];
}

class Projeto extends GerenciadorDeTarefas {
    private tarefas: Set<string> = new Set();

    adicionarTarefa(tarefa: string): void {
        this.tarefas.add(tarefa);
    }

    listarTarefas(): string[] {
        return Array.from(this.tarefas);
    }
}

class TarefasDiarias extends GerenciadorDeTarefas {
    private tarefas: Set<string> = new Set();

    adicionarTarefa(tarefa: string): void {
        this.tarefas.add(tarefa);
    }

    listarTarefas(): string[] {
        return Array.from(this.tarefas);
    }
}

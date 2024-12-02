abstract class Inventario {
    abstract adicionarItem(item: string, quantidade: number): void;
    abstract removerItem(item: string): void;
    abstract listarInventario(): Record<string, number>;
}

class InventarioArmazem extends Inventario {
    private itens: Record<string, number> = {};

    adicionarItem(item: string, quantidade: number): void {
        this.itens[item] = (this.itens[item] || 0) + quantidade;
    }

    removerItem(item: string): void {
        delete this.itens[item];
    }

    listarInventario(): Record<string, number> {
        return this.itens;
    }
}

class InventarioLoja extends Inventario {
    private itens: Record<string, number> = {};
    private readonly quantidadeMaxima = 10;

    adicionarItem(item: string, quantidade: number): void {
        const quantidadeAtual = this.itens[item] || 0;
        this.itens[item] = Math.min(quantidadeAtual + quantidade, this.quantidadeMaxima);
    }

    removerItem(item: string): void {
        delete this.itens[item];
    }

    listarInventario(): Record<string, number> {
        return this.itens;
    }
}

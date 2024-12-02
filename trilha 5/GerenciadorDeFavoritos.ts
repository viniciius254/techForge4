abstract class GerenciadorDeFavoritos {
    abstract adicionarFavorito(item: string): void;
    abstract listarFavoritos(): string[];
}

class FilmesFavoritos extends GerenciadorDeFavoritos {
    private favoritos: Set<string> = new Set();

    adicionarFavorito(item: string): void {
        this.favoritos.add(item);
    }

    listarFavoritos(): string[] {
        return Array.from(this.favoritos).sort();
    }
}

class LivrosFavoritos extends GerenciadorDeFavoritos {
    private favoritos: string[] = [];

    adicionarFavorito(item: string): void {
        this.favoritos.unshift(item);
    }

    listarFavoritos(): string[] {
        return this.favoritos;
    }
}

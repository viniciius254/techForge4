abstract class Pagamento {

    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento processado com sucesso via Cartão de Crédito: ${this.numeroCartao}`);
        } else {
            console.log('Número do cartão inválido.');
        }
    }

    private validarCartao(): boolean {
        return this.numeroCartao != null && this.numeroCartao.length === 16;
    }
}

class PagamentoBoleto extends Pagamento {
    private codigoBoleto: string;

    constructor() {
        super();
        this.codigoBoleto = this.gerarCodigoBoleto();
    }

    processar(): void {
        console.log(`Pagamento processado com sucesso via Boleto. Código do Boleto: ${this.codigoBoleto}`);
    }

    private gerarCodigoBoleto(): string {
        return `BOL${Date.now()}`;
    }
}

function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const pagamentoCartao = new PagamentoCartao('3234507899123458');
processarPagamento(pagamentoCartao);

const pagamentoBoleto = new PagamentoBoleto();
processarPagamento(pagamentoBoleto);abstract class Pagamento {

    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento processado com sucesso via Cartão de Crédito: ${this.numeroCartao}`);
        } else {
            console.log('Número do cartão inválido.');
        }
    }

    private validarCartao(): boolean {
        return this.numeroCartao != null && this.numeroCartao.length === 16;
    }
}

class PagamentoBoleto extends Pagamento {
    private codigoBoleto: string;

    constructor() {
        super();
        this.codigoBoleto = this.gerarCodigoBoleto();
    }

    processar(): void {
        console.log(`Pagamento processado com sucesso via Boleto. Código do Boleto: ${this.codigoBoleto}`);
    }

    private gerarCodigoBoleto(): string {
        return `BOL${Date.now()}`;
    }
}

function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const pagamentoCartao = new PagamentoCartao('3234507899123458');
processarPagamento(pagamentoCartao);

const pagamentoBoleto = new PagamentoBoleto();
processarPagamento(pagamentoBoleto);
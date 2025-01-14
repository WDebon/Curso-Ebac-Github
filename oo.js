class Jogo {
    constructor(nome, valor, genero, avaliacao) {
        if (valor <= 0) throw new Error("O valor do jogo deve ser maior que zero.");
        if (avaliacao < 0 || avaliacao > 10) throw new Error("A avaliação deve estar entre 0 e 10.");
        this.nome = nome;
        this.valor = valor;
        this.genero = genero;
        this.avaliacao = avaliacao;
        this.nivelAvaliacao = null;
        this.nivelAtratividade = null;
    }

    ehDivertido() {
        if (this.avaliacao <= 4) {
            this.nivelAvaliacao = 'mal avaliado';
        } else if (this.avaliacao > 4 && this.avaliacao < 6) {
            this.nivelAvaliacao = 'mediano';
        } else if (this.avaliacao < 8) {
            this.nivelAvaliacao = 'bem avaliado';
        } else {
            this.nivelAvaliacao = 'muito bem avaliado';
        }
    }

    valeAPena() {
        const avaliacaoNormalizada = this.avaliacao / 10; 
        const calcAtratividade = avaliacaoNormalizada / this.valor; 
        const somaAtratividade = calcAtratividade * 1000;
        
        if (somaAtratividade <= 2) {  
            this.nivelAtratividade = 'não é uma escolha recomendada, pois não oferece um bom custo-benefício';
        } else if (somaAtratividade > 2 && somaAtratividade <= 4) {
            this.nivelAtratividade = 'oferece um custo-benefício razoável, mas vale considerar outros fatores';
        } else if (somaAtratividade > 4 && somaAtratividade <= 6) {
            this.nivelAtratividade = 'tem um bom custo-benefício e pode proporcionar uma diversão satisfatória';
        } else {
            this.nivelAtratividade = 'é uma excelente escolha, com grande chance de proporcionar uma experiência incrível';
        }
    }

    exibirInformacoes() {
        this.ehDivertido();
        this.valeAPena();
        console.log(`O jogo ${this.nome} possui o valor de R$${this.valor} do gênero ${this.genero}, sendo um jogo que está ${this.nivelAvaliacao}, portanto com base em avaliações e valor está ${this.nivelAtratividade}.`);
    }
}

class JogoAcao extends Jogo {
    constructor(nome, valor, avaliacao) {
        super(nome, valor, 'Ação', avaliacao);
    }
}

class JogoAventura extends Jogo {
    constructor(nome, valor, avaliacao) {
        super(nome, valor, 'Aventura', avaliacao);
    }
}

class JogoExploracao extends Jogo {
    constructor(nome, valor, avaliacao) {
        super(nome, valor, 'Exploração', avaliacao);
    }
}

class JogoRPG extends Jogo {
    constructor(nome, valor, avaliacao) {
        super(nome, valor, 'RPG', avaliacao);
    }
}

const GrandTheftAuto = new JogoAcao('Grand Theft Auto', 99, 7);
const Minecraft = new JogoAventura ('Minecraft', 120, 8);
const AssassinsCreedOdyssey = new JogoRPG('Assassins Creed Odyssey', 200, 4);
const NoMansSky = new JogoExploracao('No Mans Sky', 160, 7);

GrandTheftAuto.exibirInformacoes();
Minecraft.exibirInformacoes();
AssassinsCreedOdyssey.exibirInformacoes();
NoMansSky.exibirInformacoes();
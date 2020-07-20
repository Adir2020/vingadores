class Pessoa {
    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }
}

class Vingador extends Pessoa {
    constructor(
        nome,
        altura,
        peso,
        poderes,
        temArmadura,
        temArma,
        isMembroFundador,
        isImortal
    ) {
        super(nome, altura, peso);
        this.poderes = poderes;
        this.temArmadura = temArmadura;
        this.temArma = temArma;
        this.isMembroFundador = isMembroFundador;
        this.isImortal = isImortal;
    }

    lutar() {
        alert(`${this.nome} está lutando usando ${this.poderes[0]}`);
    }
}

const visão = new Vingador(
    "visão",
    "1.80",
    "80kg",
    ["Rajadas de energia", "Super força", "Vôo", "manipulação holografica"],
    true,
    false,
    false
);

document.getElementById("lutar").onclick = function () {
    visão.lutar();
};

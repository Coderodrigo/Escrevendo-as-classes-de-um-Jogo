class Herói {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo


    }
    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}




    let Carlos = new Herói("Carlos","39","guerreiro")
    Carlos.atacar()

    let Gilda = new Herói("Gilda", "256", "mago")
    Gilda.atacar()

    let Ademar = new Herói("Ademar", "22", "ninja")
    Ademar.atacar()

    let Ronalda = new Herói("Ronalda", "90", "monge")
    Ronalda.atacar()
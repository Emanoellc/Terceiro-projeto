// # 3️⃣ Escrevendo as classes de um Jogo


class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {

    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "não tem ataque definido";
    }
    
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let heroi = new Heroi("Arthur", 25, "ninja");

heroi.atacar();


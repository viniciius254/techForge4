class Veiculo {

    mover(){
        console.log(`O veículo está se movendo`)
    }
 }

class Bicicleta extends Veiculo {

    mover(){
        console.log("A bicicleta está pedalando")
    }
}

class Carro extends Veiculo{
    mover(){
        console.log("O carro está dirigindo")
    }
}

const carro = new Carro;
const bicicleta = new Bicicleta;

bicicleta.mover();
carro.mover();
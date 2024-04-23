
const playHuman = (humanChoice) =>{

   playTheGame(humanChoice, playMachine())

}

const playMachine = () => {

const choices = ['rock','paper','scissors']
const randonNumber = Math.floor(Math.random() * 3)

return choices[randonNumber]


}

const playTheGame = (human, machine) => {

console.log('Humano:' + human + "Maquina:" + machine)

}


 
function pickComputerOption() {
    let computerOption = ''
    let numeroAleatorio = Math.random()
    if (numeroAleatorio >= 0 && numeroAleatorio < 1 / 3) {
        computerOption = 'Piedra'
    } else if (numeroAleatorio >= 1 / 3 && numeroAleatorio < 2 / 3) {
        computerOption = 'Papel'
    } else if (numeroAleatorio >= 2 / 3 && numeroAleatorio < 1) {
        computerOption = 'Tijera'
    }
    return computerOption;
}

function playGame(playerMove) {
    let computerOption = pickComputerOption()
    let resultado = ''
    //Lógica de juego cuando elige PIEDRA:
    if(playerMove === 'Piedra') {
        if(computerOption === 'Piedra') {
            resultado = "Tie"
        } else if (computerOption === 'Papel') {
            resultado = "You lose"
        } else if (computerOption === 'Tijera') {
            resultado = "YOU WIN"
        }
    }

    //Lógica del juego cuando elige PAPEL:
    else if(playerMove === 'Papel') {
        if (computerOption === 'Piedra') {
            resultado = "YOU WIN"
        } else if (computerOption === 'Papel') {
            resultado = "Tie"
        } else if (computerOption === 'Tijera') {
            resultado = "You lose"
        }
    }

    //Lógica del juego cuando elige TIJERA:
    else if(playerMove === 'Tijera') {
        if (computerOption === 'Piedra') {
            resultado = "You lose"
        } else if (computerOption === 'Papel') {
            resultado = "YOU WIN"
        } else if (computerOption === 'Tijera') {
            resultado = "Tie"
        }
    }

    document.querySelector(".js-result").innerHTML = resultado;
    //alert(`Usted eligió ${playerMove.toUpperCase()}. La computadora eligió ${computerOption.toUpperCase()}. ${resultado}`)
    document.querySelector(".moves").innerHTML = `Tú <img src="img/${playerMove}-emoji.png" alt="" class="move-icon">
    <img src="img/${computerOption}-emoji.png" alt="" class="move-icon"> Computadora` 
}
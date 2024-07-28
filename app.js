function pickComputerOption() {
    let computerOption = ''
    let numeroAleatorio = Math.random()
    if (numeroAleatorio >= 0 && numeroAleatorio < 1 / 3) {
        computerOption = 'piedra'
    } else if (numeroAleatorio >= 1 / 3 && numeroAleatorio < 2 / 3) {
        computerOption = 'papel'
    } else if (numeroAleatorio >= 2 / 3 && numeroAleatorio < 1) {
        computerOption = 'tijera'
    }
    return computerOption;
}

function playGame(playerMove) {
    let computerOption = pickComputerOption()
    let resultado = ''
    //Lógica de juego cuando elige PIEDRA:
    if(playerMove === 'piedra') {
        if(computerOption === 'piedra') {
            resultado = "Tie"
        } else if (computerOption === 'papel') {
            resultado = "You lose"
        } else if (computerOption === 'tijera') {
            resultado = "YOU WIN"
        }
    }

    //Lógica del juego cuando elige PAPEL:
    else if(playerMove === 'papel') {
        if (computerOption === 'piedra') {
            resultado = "YOU WIN"
        } else if (computerOption === 'papel') {
            resultado = "Tie"
        } else if (computerOption === 'tijera') {
            resultado = "You lose"
        }
    }

    //Lógica del juego cuando elige TIJERA:
    else if(playerMove === 'tijera') {
        if (computerOption === 'piedra') {
            resultado = "You lose"
        } else if (computerOption === 'papel') {
            resultado = "YOU WIN"
        } else if (computerOption === 'tijera') {
            resultado = "Tie"
        }
    }

    document.querySelector(".js-result").innerHTML = resultado;
    //alert(`Usted eligió ${playerMove.toUpperCase()}. La computadora eligió ${computerOption.toUpperCase()}. ${resultado}`)
    document.querySelector(".moves").innerHTML = `Tú <img src="img/${playerMove}-emoji.png" alt="" class="move-icon">
    <img src="img/${computerOption}-emoji.png" alt="" class="move-icon"> Computadora` 
}
function rollDice() {
    // Gerando novos números aleatórios entre 1 e 6 para os dois jogadores
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    //usar floor *6 + 1, pq random poderia dar 6.5 e round pra 7 

    // Atualizando o HTML das imagens para mostrar os números aleatórios
    document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

    if (randomNumber1 > randomNumber2) {
        document.querySelector(".winner1").style.visibility = "visible"
        document.querySelector(".winner1").innerHTML = "You Win!!"
        document.querySelector(".winner1").style.fontWeight = "bolder"
        document.querySelector(".winner2").style.fontWeight = "normal"
        document.querySelector(".winner2").style.visibility = "visible"
        document.querySelector(".winner2").innerHTML = "You lose!"
        
        document.querySelector(".winner2").innerHTML = "You lose!"
    } else {
        document.querySelector(".winner2").innerHTML = "You Win!"
        document.querySelector(".winner2").style.visibility = "visible"
        document.querySelector(".winner2").style.fontWeight = "bolder"
        document.querySelector(".winner1").style.fontWeight = "normal"
        document.querySelector(".winner1").style.visibility = "visible"
        document.querySelector(".winner1").innerHTML = "You lose!"
    }

    // Atualizando a pontuação dos jogadores
    document.querySelector(".player1-score").textContent = `Player 1 rolled: ${randomNumber1}`;
    document.querySelector(".player2-score").textContent = `Player 2 rolled: ${randomNumber2}`;
}

// Adicionando o evento de clique ao botão de refresh
document.getElementById("roll-dice").addEventListener('click', rollDice);



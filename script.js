function jogar(){
    var num = Number(document.querySelector("#chute").value)
    var resultado = document.querySelector("#resultado")
    var chances = 5
    var numSorteado = Math.random() * 10

    for(i = 0; i <= 5; i++){
        if (num < numSorteado & i < 5){
            resultado.innerHTML += "O número é maior"
        }else if (num > numSorteado & i < 5){
            resultado.innerHTML += "O número é maior"
        }else if(num == numSorteado & i == 5){
            resultado.innerHTML += "Acertou"
        }else{
            resultado.innerHTML += "Errou"
        }
    }

}
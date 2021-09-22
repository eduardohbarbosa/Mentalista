var numSorteado = num = (Math.random() * 50).toFixed(0)

function jogar(){
    var num = Number(document.querySelector("#chute").value)
    var resultado = document.querySelector("#resultado")

    if (num < numSorteado){
        resultado.innerHTML = "Errou! O número era maior."
    }else if (num > numSorteado){
        resultado.innerHTML = "Errou! O número era menor."
    }else if(num == numSorteado){
        resultado.innerHTML = "Acertou!"
    }
}

function sortear(){
    document.location.reload()
}
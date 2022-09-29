function calcularImc(){
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let img = document.getElementById('img')

    let imc = peso / (altura * altura).toFixed(2)

    if(imc >= 0 && imc <18.5){
        img.src = 'images/pesobaixo.png'
        document.body.style.background = '#FFFF00'
    }
    else if(imc >= 18.5 && imc < 24.9){
        img.src = 'images/pesoideal.png'
        document.body.style.background = "#00FF7F"
    }
    else if(imc >= 25 && imc < 29.9){
        img.src = 'images/sobrepeso.png'
        document.body.style.background = "#9400D3"
    }
    else if(imc >= 30 && imc < 34.9){
        img.src = 'images/obesidade.png'
        document.body.style.background = "#C71585"
    }
    else if(imc >= 35.0 && imc < 99){
        img.src = 'images/obesidadesevera.png'
        document.body.style.background = "#8B0000"
    }

    else{imc
    }

}

let button = document.getElementById('button')
button.addEventListener('click', calcularImc)


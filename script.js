function calcular() {
    let distancia = parseFloat(document.getElementById('distancia').value);
    let consumo = parseFloat(document.getElementById('consumo').value);
    let preco = parseFloat(document.getElementById('preco').value);

    if (isNaN(distancia) || isNaN(consumo) || isNaN(preco) || distancia <= 0 || consumo <= 0 || preco <= 0) {
        document.getElementById('resultado').innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    let litrosNecessarios = distancia / consumo;
    let custoTotal = litrosNecessarios * preco;

    document.getElementById('resultado').innerText = `Você gastará aproximadamente R$ ${custoTotal.toFixed(2)}.`;
}

function calcularCombustivel() {
    let precoGasolina = parseFloat(document.getElementById("gasolina").value);
    let precoEtanol = parseFloat(document.getElementById("etanol").value);

    if (isNaN(precoGasolina) || isNaN(precoEtanol)) {
        document.getElementById("resultado").innerText = "Por favor, preencha ambos os campos!";
        return;
    }

    let limiteEtanol = precoGasolina * 0.7;

    if (precoEtanol <= limiteEtanol) {
        document.getElementById("resultado").innerText = "Vale a pena abastecer com Etanol!";
    } else {
        document.getElementById("resultado").innerText = "Vale a pena abastecer com Gasolina!";
    }
}

function atualizarTráfego() {
    var trafego = document.getElementById("trafego").value;
    var trafegoTexto = document.getElementById("trafegoTexto");

    if (trafego == "0") {
        trafegoTexto.innerHTML = "Trânsito Leve (75Km/H)";
        trafegoTexto.style.color = "white"; 
        trafegoTexto.style.fontSize = "16px"; 
    } else if (trafego == "1") {
        trafegoTexto.innerHTML = "Trânsito Moderado (50Km/H)";
        trafegoTexto.style.color = "white"; 
        trafegoTexto.style.fontSize = "16px"; 
    } else if (trafego == "2") {
        trafegoTexto.innerHTML = "Trânsito Pesado (30Km/H)";
        trafegoTexto.style.color = "white"; 
        trafegoTexto.style.fontSize = "16px"; 
    }
}

function calcularTempo() {
    var distancia = document.getElementById("distancia").value;
    var trafego = document.getElementById("trafego").value;


    var velocidades = [75, 50, 30];

    if (distancia && trafego !== "") {
        var velocidadeFinal = velocidades[trafego];

        var tempo = distancia / velocidadeFinal;
        var horas = Math.floor(tempo);
        var minutos = Math.round((tempo - horas) * 60);

        document.getElementById("resultado").innerHTML = `Tempo estimado de chegada: ${horas} horas e ${minutos} minutos (Com ${document.getElementById("trafegoTexto").innerText})`;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos corretamente.";
    }
}





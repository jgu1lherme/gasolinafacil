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














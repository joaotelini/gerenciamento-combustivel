let nomeVeiculo = document.getElementById("veiculo")
let litrosAbastecimento = document.getElementById('litros')
let kmRodado = document.getElementById('km')
let precoAbastecimento = document.getElementById('valor')
let combustivel = document.getElementById('combustivel')
let data = document.getElementById('data')

const abastecimento = {
  nomeVeiculo: [],
  precoAbastecimento: [],
  litrosAbastecimento: [],
  kmRodado: [],
  data: [],
  combustivel: [],
  media: [],
  precoCombustivel: []
}

function calcKML() {
  let k = kmRodado.value.replace(",", ".");  
  let l = litrosAbastecimento.value.replace(",", ".");
  let km = parseFloat(k);
  let lt = parseFloat(l);

  console.log(`Valor de km: ${km}, Valor de lt: ${lt}`);

  if (!isNaN(km) && !isNaN(lt) && lt !== 0) {
    let media = km / lt;
    let mediaFixed = media.toFixed(2);
    return parseFloat(mediaFixed);
  } else {
    console.log("Por favor, insira valores numéricos válidos.");
  }
}

function limparInput() {
  nomeVeiculo.value = ""
  litrosAbastecimento.value = ""
  kmRodado.value = ""
  precoAbastecimento.value = ""
  data.value = ""
}

function botaoSalvar() {
  let media = calcKML()
  let preco = precoAbastecimento.value/litrosAbastecimento.value

  if (media !== null) {
    abastecimento.nomeVeiculo.push(nomeVeiculo.value)
    abastecimento.litrosAbastecimento.push(parseFloat(litrosAbastecimento.value))
    abastecimento.kmRodado.push(parseFloat(kmRodado.value))
    abastecimento.precoAbastecimento.push(parseFloat(precoAbastecimento.value))
    abastecimento.combustivel.push(combustivel.value)
    abastecimento.data.push(data.value)
    abastecimento.media.push(media)
    abastecimento.precoCombustivel.push(parseFloat(preco))

    console.log(abastecimento)

    limparInput()
  }
}

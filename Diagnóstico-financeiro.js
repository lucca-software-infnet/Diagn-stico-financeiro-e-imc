// RECEBE AS INFORMAÇÕES
let renda = Number(prompt("Qual a sua renda mensal?"))
let moradia = Number(prompt("Quanto dessa renda é utilizada para moradia?"))
let educacao = Number(prompt("Quanto dessa renda é utilizada para educação?"))
let transporte = Number(prompt("Quanto dessa renda é utilizada para transporte?"))

// Define as porcentagens recomendadas
const porcentagemMoradia = renda * 0.30
const porcentagemEducacao = renda * 0.20
const porcentagemTransporte = renda * 0.15

// Função para exibir alerta com a diferença
function exibirDiferenca(gasto, recomendado, categoria) {
  const diferenca = gasto - recomendado;
  const acao = diferenca > 0 ? 'Diminua' : 'Você ainda pode usar';
  alert(`${acao} ${Math.abs(diferenca).toFixed(2)}R$ em ${categoria}, para ficar dentro do orçamento.`);
}

// Se os valores informados não podem ser negativos
if (moradia < 0 || educacao < 0 || transporte < 0 || renda < 0) {
  alert("Os valores informados não podem ser negativos.");

// Se os valores não são numéricos válidos
} else if (isNaN(renda) || isNaN(moradia) || isNaN(educacao) || isNaN(transporte)) {
  alert("Informe valores numéricos válidos.");

// Se os gastos ultrapassam o orçamento recomendado
} else if (moradia > porcentagemMoradia || educacao > porcentagemEducacao || transporte > porcentagemTransporte) {
  alert("O valor não está dentro do orçamento recomendado.");

  // Exibe as porcentagens recomendadas
  alert(`O certo seria: Moradia ${porcentagemMoradia.toFixed(2)}R$ (30%), Educação ${porcentagemEducacao.toFixed(2)}R$ (20%), Transporte ${porcentagemTransporte.toFixed(2)}R$ (15%).`);

  // Exibe alertas com a diferença para cada categoria
  exibirDiferenca(moradia, porcentagemMoradia, 'moradia');
  exibirDiferenca(educacao, porcentagemEducacao, 'educação');
  exibirDiferenca(transporte, porcentagemTransporte, 'transporte');

// Se o orçamento está dentro do recomendado
} else {
  alert(`Você está dentro do orçamento.`);
}

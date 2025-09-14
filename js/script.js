const dados = { faturamentoAnual: 2492392.00, custosAnuais: 1628022.60 };

document.getElementById('calcBtn').addEventListener('click', () => {
  const lucro = dados.faturamentoAnual - dados.custosAnuais;
  const margem = (lucro / dados.faturamentoAnual) * 100;
  document.getElementById('margem').textContent = `Margem: ${margem.toFixed(2)}%`;
  document.getElementById('lucro').textContent = lucro.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
});

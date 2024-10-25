function ex01() {
  const votosLista = [];
  var votoAtual;

  var candidato1Contagem = 0;
  var candidato2Contagem = 0;
  var votosBrancosContagem = 0;
  var votosNulosContagem = 0;
  var totalVotosContagem = 0;

  var candidato1Porcentagem = 0;
  var candidato2Porcentagem = 0;
  var votosBrancosPorcentagem = 0;
  var votosNulosPorcentagem = 0;

  while (votoAtual != -1) {
    votoAtual = parseInt(prompt(`Digite seu voto: `));
    if (votoAtual === 1 || votoAtual === 2 || votoAtual === 0) {
      votosLista.push(votoAtual);
    } 
    else if (votoAtual !== -1) {
      votosLista.push(5);
    }
  }

  for (let i = 0; i < votosLista.length; i++) {
    if (votosLista[i] === 1) {
      candidato1Contagem++;
      totalVotosContagem++;
    } else if (votosLista[i] === 2) {
      candidato2Contagem++;
      totalVotosContagem++;
    } else if (votosLista[i] === 0) {
      votosBrancosContagem++;
      totalVotosContagem++;
    }
    else if (votosLista[i] == 5) {
      votosNulosContagem++;
      totalVotosContagem++;
    }
  }

  if (totalVotosContagem > 0) {
    candidato1Porcentagem = ((candidato1Contagem * 100) / totalVotosContagem).toFixed(1);
    candidato2Porcentagem = ((candidato2Contagem * 100) / totalVotosContagem).toFixed(1);
    votosBrancosPorcentagem = ((votosBrancosContagem * 100) / totalVotosContagem).toFixed(1);
    votosNulosPorcentagem = ((votosNulosContagem * 100) / totalVotosContagem).toFixed(1);
  }

  let resultadoFinal = '';

  if (candidato1Porcentagem > candidato2Porcentagem) {
    resultadoFinal += `O Karkar Venceu!<br>`;
  } else if (candidato1Porcentagem < candidato2Porcentagem) {
    resultadoFinal += `O Ramalho Venceu!<br>`;
  } else {
    resultadoFinal += `Deu erro, ou votos em nulo ganharam.<br>`;
  }

  resultadoFinal += `Votos do Karkar: ${candidato1Contagem} // Porcentagem: ${candidato1Porcentagem}%<br>`;
  resultadoFinal += `Votos do Ramalho: ${candidato2Contagem} // Porcentagem: ${candidato2Porcentagem}%<br>`;
  resultadoFinal += `Votos em branco: ${votosBrancosContagem} // Porcentagem: ${votosBrancosPorcentagem}%<br>`;
  resultadoFinal += `Votos nulos: ${votosNulosContagem} // Porcentagem: ${votosNulosPorcentagem}%<br>`;

  document.getElementById("resposta").innerHTML = resultadoFinal;
}

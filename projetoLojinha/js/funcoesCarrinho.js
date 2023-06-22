function alterarQtd(adicRemo, ProdN) {
  let qtd = parseInt(document.getElementById('qtd'+ProdN).innerHTML);
  switch (adicRemo) {
    case "adicionar":
      qtd+=1;
      //document.getElementById('qtd'+ProdN).innerHTML = qtd;      
      break;

    case "remover":
      qtd > 0 ? qtd-=1 : 0;
      //document.getElementById('qtd'+ProdN).innerHTML = qtd;
      break;

    default:
        alert("Opção inválida. Somente: adicionar ou remover");
      break;
  }
  document.getElementById('qtd'+ProdN).innerHTML = qtd;
  const vTotalProdN = (document.getElementById('prc'+ProdN).innerHTML.replace(/\,/g,".")*qtd).toFixed(2);
  document.getElementById('vTotal'+ProdN).innerHTML = vTotalProdN.replace(/\./g,",");
  totalizar();

}

function totalizar() {
    const qtdItens = parseInt(document.getElementById('qtdItens').innerHTML);
    let total = 0;
    for(let i = 1; i <= qtdItens; i++){
        total += parseFloat((document.getElementById('vTotalP0'+i).innerHTML).replace(/\,/g,"."))
    }
    document.getElementById('subTotal').innerHTML=total.toFixed(2).replace(/\./g,",");
}

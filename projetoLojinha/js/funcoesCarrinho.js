function alterarQtd(adicRemo, ProdN) {
  let qtd = null;
  switch (adicRemo) {
    case "adicionar":
      qtd = parseInt(document.getElementById('qtd'+ProdN).innerHTML);
      qtd+=1;
      document.getElementById('qtd'+ProdN).innerHTML = qtd;      
      break;

    case "remover":
      qtd = parseInt(document.getElementById('qtd'+ProdN).innerHTML);
      qtd > 0 ? qtd-=1 : 0;
      document.getElementById('qtd'+ProdN).innerHTML = qtd;
      break;

    default:
        alert("Opção inválida. Somente: adicionar ou remover");
      break;
  }

  const vTotalProdN = (document.getElementById('prc'+ProdN).innerHTML.replace(/\,/g,".")*qtd).toFixed(2);
  document.getElementById('vTotal'+ProdN).innerHTML = vTotalProdN.replace(/\./g,",");
  totalizar();

}

function totalizar() {
    let total = 0;
    for(let i = 1; i <= 3; i++){
        total += parseFloat((document.getElementById('vTotalP0'+i).innerHTML).replace(/\,/g,"."))
    }
    document.getElementById('subTotal').innerHTML=total.toFixed(2).replace(/\./g,",");
}

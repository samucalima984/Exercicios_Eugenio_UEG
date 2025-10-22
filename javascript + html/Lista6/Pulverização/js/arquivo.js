const nome = document.getElementById("idInNome");
const opcao = document.getElementById("idInOpcao");
const area = document.getElementById("idInArea");
const calculoPulverizacao = document.getElementById("btnPulverizacao");
const resultado = document.getElementById("idOnResultado");

function calcularPulverizacao(areaAcres, tipoPulverizacao, nomeFazendeiro){

let strPulverizacao = "";
switch(tipoPulverizacao){
   case 1:
      strPulverizacao = "Pulverizacao contra ervas daninhas";
      valorPago = 50 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 2:
      strPulverizacao = "Pulverizacao contra gafanhotos";
      valorPago = 100 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 3:
      strPulverizacao = "Pulverizacao contra broca";
      valorPago = 150 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      }if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 4:
      strPulverizacao = "Pulverizacao contra tudo";
      valorPago = 250 * areaAcres;
     if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   default:
      strPulverizacao = "errado";
      valorPago = 0;
}
   const saida2 = "Tipo da Pulverizacao: " + strPulverizacao;
   const saida3 = "Valor da pulverizacao: R$" + valorPago;
   const saida = "Nome do Fazendeiro: " + nomeFazendeiro;
   return(saida + "\n" + saida2 + "\n" + saida3);
}

function eventoBtnCalcularCustoPulverizacao(){
   const areaAcresN = Number(area.value);
   const tipoPulverizacaoN = Number(opcao.value);
   const nomeFazendeiroN = nome.value;
   const saida = calcularPulverizacao(areaAcresN, tipoPulverizacaoN, nomeFazendeiroN);

   resultado.innerText = saida;
}
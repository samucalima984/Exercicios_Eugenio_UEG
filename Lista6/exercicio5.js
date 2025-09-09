const areaAcres = 100;
let tipoPulverizacao = 2;
let strPulverizacao = "";

switch(tipoPulverizacao){
   case 1:
      strPulverizacao = "Pulverização contra ervas daninhas";
      valorTotal = 50 * areaAcres;
      if(areaAcres > 300){
         valorTotal = valorTotal - (valorTotal * 0.05);
      } else if(valorTotal > 10750){
            valorTotal = valorTotal - (valorTotal * 0.10);
      }
      break;
   case 2:
      strPulverizacao = "Pulverização contra gafanhotos";
      valorTotal = 100 * areaAcres;
      if(areaAcres > 300){
         valorTotal = valorTotal - (valorTotal * 0.05);
      } else if(valorTotal > 10750){
            valorTotal = valorTotal - (valorTotal * 0.10);
      }
      break;
   case 3:
      strPulverizacao = "Pulverização contra broca";
      valorTotal = 150 * areaAcres;
      if(areaAcres > 300){
         valorTotal = valorTotal - (valorTotal * 0.05);
      } else if(valorTotal > 10750){
            valorTotal = valorTotal - (valorTotal * 0.10);
      }
      break;
   case 4:
      strPulverizacao = "Pulverização contra tudo";
      valorTotal = 250 * areaAcres;
     if(areaAcres > 300){
         valorTotal = valorTotal - (valorTotal * 0.05);
      } else if(valorTotal > 10750){
            valorTotal = valorTotal - (valorTotal * 0.10);
      }
      break;

   default:
      strPulverizacao = "Tipo de Pulverização inválido";
      valorTotal = 0;
}
   const saida = "Tipo da Pulverização: " + strPulverizacao;
   const saida2 = "Valor da pulverizacao: R$" + valorTotal;
   console.log(saida + "\n" + saida2);
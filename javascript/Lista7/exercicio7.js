function verificacaoIdade(idade) {
  
if(idade < 16){console.log("O usuário atende a condição de NÃO ELEITOR");}
if(idade >= 18 && idade <= 65){console.log("O usuário atende a condição de ELEITOR OBRIGATÓRIO");}
if(idade >= 16 && idade < 18 || idade > 65){console.log("O usuário atende a condição de ELEITOR FACULTATIVO");}
}
verificacaoIdade(12);
const nome = document.getElementById("idInNome");
const idade = document.getElementById("idInIdade");
const btnVerificarIdade = document.getElementById("btnVerificarIdade");
const resultado = document.getElementById("idOnResultado");

function verificarIdade(idade) {

if(idade < 16) return "Atende a condição de NÃO ELEITOR";
if(idade >= 18 && idade <= 65) return "Atende a condição de ELEITOR OBRIGATÓRIO";
if(idade >= 16 && idade < 18 || idade > 65) return "Atende a condição de ELEITOR FACULTATIVO";
    
}

function eventoBtnVerificarClasseEleitoral() {

    const idadeU = Number(idade.value);
    const verificarClasse = verificarIdade(idadeU);
    const saida = "O usuário " + nome.value + " " + verificarClasse;
    
    resultado.innerText = saida;
}
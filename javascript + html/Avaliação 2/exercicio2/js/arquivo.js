const nome = document.getElementById("idInNome");
const anoNascimento = document.getElementById("idInAno");
const resultado = document.getElementById("idOnResultado");

function verificarIdade(anoDeNasicmento) {
const idade = 2025 - anoDeNasicmento;

if(idade < 5) return "Não Atende a nenhuma Categoria";
if(idade >= 5 && idade <= 7) return "Atende a Categoria Infantil A";
if(idade >= 8 && idade <= 10) return "Atende a Categoria Infantil B";
if(idade >= 11 && idade <= 13) return "Atende a Categoria Juvenil A";
if(idade >= 14 && idade <= 17) return "Atende a Categoria Juvenil B";
if(idade >= 18) return "Atende a Categoria Sênior";

}

function eventoBtnExecutar() {

    const ano = Number(anoNascimento.value);
    const i = 2025 - ano;
    const verificarCategoria = verificarIdade(ano);
    const saida = "Nome do Nadador: " + nome.value + "\n" + "Ano de Nascimento: " + anoNascimento.value + "\n" + "Idade: " + i + "\n" + "Categoria: " + verificarCategoria + "\n";
    
    resultado.innerText = saida;
}
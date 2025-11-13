let flag = 1;
const botao = document.getElementById("botao");

function mudarCor() {
    if (flag) {
        document.body.style.backgroundColor = "white";
        flag = 0;
    } else {
        document.body.style.backgroundColor = "black";
        flag = 1;
    }   
}
botao.addEventListener("click", mudarCor);
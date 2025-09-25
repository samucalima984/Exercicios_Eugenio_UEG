const opcao = document.getElementById("idInOpcao");
const raio = document.getElementById("idInRaio");
const altura = document.getElementById("idInAltura");
const calculoAreaVolume = document.getElementById("btnAreaVolume");
const resultado = document.getElementById("idOnResultado");

function calcularAreaVolume(opcao, raio, altura) {
    
    switch (opcao) {
    case 1:
        volume = (Math.PI * Math.pow(raio,2) * altura) / 3;
        area = Math.PI * raio * Math.sqrt(Math.pow(raio,2) + Math.pow(altura,2));
        break;
    case 2:
        volume = Math.PI * Math.pow(raio,2) * altura;
        area = 2 * Math.PI * raio * altura;
        break;
    case 3:
        volume = (4/3) * Math.PI * Math.pow(raio,3);
        area = 4 * Math.PI * Math.pow(raio,2);
        break;        

    default:
        return "Opção de Figura Geométrica inválido";
        
}
return `Volume: ${volume.toFixed(2)}` + "\n" +  `Área: ${area.toFixed(2)}`;
}

function eventoBtnCalcularAreaVolumeFigura() {
    
    const escolha = Number(opcao.value);
    const raioX = Number(raio.value);
    const alturaY = Number(altura.value);
    const calculo = calcularAreaVolume(escolha, raioX, alturaY);
    const saida = calculo;

    resultado.innerText = saida;

}
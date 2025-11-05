class ConjuntoNumerico {
    #array = [];

    constructor() {}

    obterTamanho() {
        return this.#array.length;
    }

    verificarConjuntoVazio() {
        return this.#array.length === 0;
    }

    incluir(elemento) {
        if (!this.#buscar(elemento)) {
            this.#array[this.#array.length] = elemento; // sem usar push()
        }
    }

    #buscar(valor) {
        for (let i = 0; i < this.#array.length; i++) {
            if (this.#array[i] === valor) return true;
        }
        return false;
    }

    obterConjunto() {
        const vetor = [];
        for (let i = 0; i < this.#array.length; i++) {
            vetor[vetor.length] = this.#array[i];
        }
        return vetor;
    }

    // --- OPERAÇÕES FUNDAMENTAIS ---
    uniao(outro) {
        const resultado = new ConjuntoNumerico();
        for (let i = 0; i < this.#array.length; i++) resultado.incluir(this.#array[i]);
        const outroArray = outro.obterConjunto();
        for (let j = 0; j < outroArray.length; j++) resultado.incluir(outroArray[j]);
        return resultado;
    }

    intersecao(outro) {
        const resultado = new ConjuntoNumerico();
        const outroArray = outro.obterConjunto();
        for (let i = 0; i < this.#array.length; i++) {
            for (let j = 0; j < outroArray.length; j++) {
                if (this.#array[i] === outroArray[j]) resultado.incluir(this.#array[i]);
            }
        }
        return resultado;
    }

    diferenca(outro) {
        const resultado = new ConjuntoNumerico();
        const outroArray = outro.obterConjunto();
        for (let i = 0; i < this.#array.length; i++) {
            let encontrado = false;
            for (let j = 0; j < outroArray.length; j++) {
                if (this.#array[i] === outroArray[j]) {
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) resultado.incluir(this.#array[i]);
        }
        return resultado;
    }

    // --- RELAÇÕES ENTRE CONJUNTOS ---
    ehSubconjunto(outro) {
        const outroArray = outro.obterConjunto();
        for (let i = 0; i < this.#array.length; i++) {
            let encontrado = false;
            for (let j = 0; j < outroArray.length; j++) {
                if (this.#array[i] === outroArray[j]) {
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) return false;
        }
        return true;
    }

    ehIgual(outro) {
        return this.ehSubconjunto(outro) && outro.ehSubconjunto(this);
    }

    ehDisjunto(outro) {
        return this.intersecao(outro).verificarConjuntoVazio();
    }

    // --- ANÁLISES NUMÉRICAS ---
    amplitude() {
        if (this.verificarConjuntoVazio()) return 0;
        let maior = this.#array[0];
        let menor = this.#array[0];
        for (let i = 1; i < this.#array.length; i++) {
            if (this.#array[i] > maior) maior = this.#array[i];
            if (this.#array[i] < menor) menor = this.#array[i];
        }
        return maior - menor;
    }

    media() {
        if (this.verificarConjuntoVazio()) return 0;
        let soma = 0;
        for (let i = 0; i < this.#array.length; i++) {
            soma += this.#array[i];
        }
        return soma / this.#array.length;
    }

    produtoEscalar(outro) {
        const outroArray = outro.obterConjunto();
        if (this.#array.length !== outroArray.length)
            return "Conjuntos de tamanhos diferentes!";
        let soma = 0;
        for (let i = 0; i < this.#array.length; i++) {
            soma += this.#array[i] * outroArray[i];
        }
        return soma;
    }

    conjuntoOrdenado(outro) {
        const uniao = this.uniao(outro);
        const vetor = uniao.obterConjunto();
        // ordenação manual (bubble sort)
        for (let i = 0; i < vetor.length - 1; i++) {
            for (let j = 0; j < vetor.length - i - 1; j++) {
                if (vetor[j] > vetor[j + 1]) {
                    const temp = vetor[j];
                    vetor[j] = vetor[j + 1];
                    vetor[j + 1] = temp;
                }
            }
        }
        const resultado = new ConjuntoNumerico();
        for (let k = 0; k < vetor.length; k++) resultado.incluir(vetor[k]);
        return resultado;
    }
}

// ---- FUNÇÕES DA INTERFACE ----

const A = new ConjuntoNumerico();
const B = new ConjuntoNumerico();

function incluirA() {
    const v = parseInt(document.getElementById("valorA").value);
    if (!isNaN(v)) A.incluir(v);
    document.getElementById("exibirA").innerText =
        "A = {" + A.obterConjunto().join(", ") + "}";
}

function incluirB() {
    const v = parseInt(document.getElementById("valorB").value);
    if (!isNaN(v)) B.incluir(v);
    document.getElementById("exibirB").innerText =
        "B = {" + B.obterConjunto().join(", ") + "}";
}

function mostrar(operacao) {
    let C;
    switch (operacao) {
        case "uniao":
            C = A.uniao(B);
            break;
        case "intersecao":
            C = A.intersecao(B);
            break;
        case "diferencaAB":
            C = A.diferenca(B);
            break;
        case "diferencaBA":
            C = B.diferenca(A);
            break;
        case "ordenado":
            C = A.conjuntoOrdenado(B);
            break;
    }
    document.getElementById("resultado").innerText =
        "Resultado: {" + C.obterConjunto().join(", ") + "}";
}

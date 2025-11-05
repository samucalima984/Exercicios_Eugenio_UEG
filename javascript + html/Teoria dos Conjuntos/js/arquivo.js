class Conjunto{

    #array = [];

    obterTamanho(){
        return this.#array.length;
    }

    verificarConjutoVazio(){
        return (this.#array.length === 0);

    }

    #buscar(valor){
        for(let elemento of this.#array){
            if(elemento === valor) return true;
        }
        return false;
    }
    
    incluir(elemento){
        if(this.#buscar(elemento)) this.#array.push(elemento);

    }

    obterConjunto(){

        const vetor = [];
        for(let elemento of this.#array) vetor.push(elemento);
        return vetor;
    }

}
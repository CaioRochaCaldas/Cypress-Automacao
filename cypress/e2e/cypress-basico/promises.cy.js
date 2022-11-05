

it('nada agora', function() {});

//funções callback para devolver a resposta assim que ela chegar 
/*
const getDados = Callback => {
    setTimeout(()=> {
        callback(12);
    },100);
}

const system = () => {
    console.log("Inicio da execução");
    //Chamei a função callback
    getDados(some => {
        console.log(`Os dados chegaram essa é a resposta ${some}`);
        console.log("Fim do programa")
    });
}

system(); */

//Com promises (é melhor que callback, pois da erro e qual o erro e caso passe da como passou)  

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        },1000);
    });
}

const system = () => {
    console.log('init');
    const prom = getSomething();
    prom.then(resposta => {console.log(`O dado é ${resposta}`)});
    console.log('end');
}

system();


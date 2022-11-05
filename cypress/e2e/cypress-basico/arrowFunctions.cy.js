it('nada agora', function() {});

/*
function soma(a,b){
    return a + b;
}


const soma = function(a,b){
    return a +b;
}

console.log(soma(1,4))


const soma = (a,b) => {
    return a + b;
}

const soma = (a,b) => a + b;

console.log(soma(1,4))

*/

//função comum abaixo que devolve oque ela é "Uma função"
it('a função de teste...', function() {
    console.log('Function',this);
});

//função anonima que devolde um undefined
it('an arrow test',()=> {
    console.log('Arrow',this);
});


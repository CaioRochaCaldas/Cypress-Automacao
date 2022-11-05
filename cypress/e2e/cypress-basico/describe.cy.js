/// <reference types="cypress"/>

it("extern test...", ()=> {

})

describe('grupo de testes',() => {
    
    describe('should group more specific test', ()=> {
        it("teste ainda mais interno", ()=> {

        });

        it.skip("teste ainda mais mais interno", ()=> {

        });
    });

    it("intern test...", () => {
    
    });
});


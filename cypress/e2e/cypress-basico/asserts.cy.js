/// <reference types="cypress"/>

describe('',()=> {
    
    it("Equals", ()=> {
    
        const a = 1;
        expect(a).equal(1);
        expect(a, "Deveria ser 1").equal(1);
        expect(a).to.be.equal(1);
        
    });

 



});



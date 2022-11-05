/// <reference types="cypress"/>

describe('Cypress basics', ()=> {
    it("Deve visitar a pagina ",()=> {
        //cy é a forma de acessar as funcionalidades do cypress
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.pause();
        //pesquisa um valor completo
        cy.title().should('be.equal','Campo de Treinamento');
        //pesquisa um valor aproximado
        cy.title().should('contain','Campo');

        //objetos encadeados
        cy.title().should('be.equal','Campo de Treinamento').should('contain','Campo');;
    });

    it("Buscando elemento", ()=> {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click();
        cy.get('#buttonSimple').should("have.value", 'Obrigado!');
    });

});
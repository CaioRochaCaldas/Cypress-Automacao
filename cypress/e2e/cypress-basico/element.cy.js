/// <reference types="cypress"/>

describe("Buscando elementos no body",()=> {
    //antes de executar finalmente  os testes
    before(()=> {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    // antes de chegar em um teste faça
    beforeEach(()=> {
      
        cy.reload();
    });

    it("busquei um elemento ",()=> {
        //buscando um elemento que dê match com cuidado
        cy.get('body').should('contain','Cuidado');
        //buscando um elemento em um span que dê match com cuidado 
        cy.get('span').should('contain','Cuidado');
        //buscando um elemento por sua class
        cy.get('.facilAchar').should('contain','Cuidado')
        //buscando um elemento por sua class de valor exato
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')

    });

    it("Links",()=> {
       
        cy.get('[href="#"]').click().should('have.text', 'Voltar');
        cy.get('#resultado').should('have.text','Voltou!');
    });


    it("Campos de texto (inputs)", () => {
        //input nome e inserir dados
        cy.get('#formNome').type('Escrevi isso aqui!');
        //recuperar valor dentro de um campo
        cy.get('#formNome').should('have.value','Escrevi isso aqui!');

        cy.get('#elementosForm\\:sugestoes').type('area de texto').should('have.value', 'area de texto')
      
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .clear().type('Erro{selectall}acerto',{delay: 100})
        .should('have.value','acerto')
    });
    it('radio buttons',()=> {
        //clicar no raio button e verifica se foi marcado e o valor
        cy.get('#formSexoMasc').click().should('be.checked');
       
    });
});

/*have.text é para valor textual de algo

have.value é para valor de um botão ou input */
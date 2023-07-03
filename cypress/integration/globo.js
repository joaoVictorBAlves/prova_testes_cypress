/// <reference types="cypress" />

export class GloboTest {

    navigate() {
        cy.visit('https://www.globo.com/')
    }

    search(input) {
        cy.get('#header-search-input').type(input)
        cy.get('#header-search-section').submit()
        cy.get('#content > div > div > ul').children().should("have.length.above", 0);
        // tentei usar esse comando do chai mas nao funcionou
        // const lista = cy.get('#content > div > div > ul').children();
        // expect(lista).to.have.length.above(0);
    }

    filter() {
        cy.get('.filters__advanced-date-filter > .filters__dropdown > .filters__dropdown__link')
        cy.contains('Na última hora').invoke("show").click({ force: true })
        cy.get('#content > div > div > ul').children().should("have.length.above", 0);
        // tentei usar esse comando do chai mas nao funcionou
        // const lista = cy.get('#content > div > div > ul').children();
        // expect(lista).to.have.length.above(0);
    }

    receita() {
        cy.get('#header-section > div.hui-container.header-grid > div.header-grid__product-links > div.menuDesktop > ul > li:nth-child(9) > a').click()
        cy.get('input#busca-campo').type('bolo de milho')
        cy.get("#frmBusca").submit();
        cy.get('[data-position="1"]').click()
    }

    previsaoDoTempo() {
        cy.get('#menu-toggle').click()
        cy.get('#menu-1-previsão-do-tempo > .menu-item-link > .menu-item-title').click()
        cy.get('.city-search__input').should("be.visible").then(() => {
            cy.get('.city-search__input').type("Fortaleza" + "{enter}")
            cy.contains("Fortaleza - CE").parent().click()
            expect(cy.contains('Fortaleza, CE')).to.be.exist
        })
    }
}
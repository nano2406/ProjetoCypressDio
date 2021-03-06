describe('Post', () => {
    beforeEach(() => {
        cy.login('testecypress@testecypress.com', 'testecypress')
    })
    it('Novo', () =>{
        cy.contains('New Aticle').click()
        cy.location('pathname').should('equal', '/editor')
        cy.get('[formcontrolname=title]').type('Cypress Hill E2E')
        cy.get('[formcontrolname=description]').type('Ponta a Ponta')
        cy.get('[formcontrolname=body]').type('Agilidade, Qualidade')
        cy.contains('Publish Article').click()
        cy.get('h1').contains('Cypress Hill E2E')
    })
    it('Editar', () =>{
        cy.contains('testecypress').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[formcontrolname=body]').clear()
        cy.get('[formcontrolname=body]').type('Economia')
        cy.contains('Publish Article').click()
        cy.contains('Ecnonomia')
        
    })
})
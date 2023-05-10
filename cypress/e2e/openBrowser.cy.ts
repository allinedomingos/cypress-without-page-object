describe('Open browser and visit sauce lab', () => {

    it('Go to sauce lab', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('.login_logo').should('be.visible');

    });
      

    

});
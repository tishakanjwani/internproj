describe('Home Page Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.conqt.com/');
    });
  
    it('should load the homepage without errors', () => {
      cy.url().should('include', 'conqt.com');
      cy.get('h1').should('be.visible');
    });
  
    it('should have functional navigation links', () => {
      cy.get('.menu-buttonM').each(($el) => {
        cy.wrap($el).click();
        cy.url().should('not.eq', 'https://www.conqt.com/');
        cy.go('back');
      });
    });
  
    it('should load hero banner images', () => {
      cy.get('.model-banner').should('be.visible');
    });
  });




describe('API Tests', () => {
    it('should return product list successfully', () => {
      cy.request('GET', 'https://dev-api.conqt.com/api/product/Get-All-Products')
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('products');
        });
    });
  });


describe('Proceed to checkout Test', function(){   

    it('Verify checkout page', function(){
      cy.fixture('example').then((user)=>{
      cy.visit(user.url)
      cy.title().should('eq','My Store')
      })
    })

    it('Verify checkout page - Add product to cart', function(){
      cy.fixture('example').then((user)=>{
      cy.visit(user.url)
      cy.contains('Women').click()
      
      cy.scrollTo('bottom')
      cy.wait(500)
      cy.get('.last-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
      //cy.contains('Add to Cart').click()      
      cy.wait(1000)
      cy.contains('Proceed to checkout').click()
      cy.scrollTo('bottom')
      cy.wait(500)
      cy.get('.cart_navigation > .button > span').click()
      cy.get('#email').type(user.email)
      cy.get('#passwd').type(user.password)
      cy.wait(500)
      cy.contains('Sign in').click()




      //cy.get('.exclusive > span').click({force: true})
      //cy.get('.button-medium > span').click() 
      //cy.get('.cart_navigation > .button > span').click()
      //cy.get('#SubmitLogin > span').click()



     
      })
     })

    //  it('login test', function(){     
    //   cy.fixture('example').then((user)=>{
    //   cy.visit(user.url)
    //   cy.get('#login-email > :nth-child(2) > .delay-100 > .group').type(user.email)
    //   cy.get('#login-password > :nth-child(2) > .delay-100 > .group').type(user.password)
    //   })   
    //   cy.get('#auth-login-submit-button').click()
    //  })   
})

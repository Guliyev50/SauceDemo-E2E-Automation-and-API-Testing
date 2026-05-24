describe('Swag Labs - End to End Checkout Flow', () => {

  it('Should log in, add an item, complete checkout, and go back home', () => {
    // 1. Sayta keçid edirik
cy.visit('https://www.saucedemo.com/');

// 2. İstifadəçi adı və parolu yazırıq
cy.get('#user-name').type('standard_user');
cy.get('#password').type('secret_sauce');

// 3. Login düyməsini sıxırıq
cy.get('#login-button').click();

// 4. Doğrulama (Assertion): Kataloq səhifəsinə çatdığımızı yoxlayırıq
cy.url().should('include', '/inventory.html');
// 5. İlk məhsulu (backpack) səbətə atırıq və səbətə daxil oluruq
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
cy.get('.shopping_cart_link').click();

// 6. Checkout mərhələsinə keçirik
cy.get('[data-test="checkout"]').click();

// 7. İnformasiya xanalarını doldurub davam edirik
cy.get('[data-test="firstName"]').type('Anar');
cy.get('[data-test="lastName"]').type('Guliyev');
cy.get('[data-test="postalCode"]').type('1001');
cy.get('[data-test="continue"]').click();

// 8. Sifarişi bitiririk və "Back Home" ilə geri qayıdırıq
cy.get('[data-test="finish"]').click();

// 9. Uğurlu tamamlanma yoxlanışı və geri dönüş
cy.get('.complete-header').should('have.text', 'Thank you for your order!');
cy.get('[data-test="back-to-products"]').click();
  });

});
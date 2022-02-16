cy.visit("https://www.reed.co.uk/");
cy.get('#main-keywords'). type('engineer');
cy.get('#main-location'). type('South West London');
cy.get('#homepageSearchButton').click();
cy.get('[textContent: "Specialisms "]').click();
cy.get('input[type="checkbox"]').check('Financial Services');
cy.get(#tagName: "SPAN")

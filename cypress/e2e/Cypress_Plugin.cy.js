describe('File upload', () => { 
        it ('uploads a file', () => { 
        cy.visit('https://filebin.net/'); 
        cy.get('input[type ="file"]') .attachFile('Chien.png');     

   }); 

});

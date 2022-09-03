describe('Todo List Compiled', () => {
    beforeEach(() => {
        cy.request('POST', 'http://localhost:8000/api/test/reset').then((response) => {})
        cy.visit('http://localhost:3000/');
    })

  it('Page Initial Compiled', () => {
      cy.contains('Mi lista de tareas');
  })

    it('I can add Task', () => {
        cy.get('#input-task')
            .type('Nueva tarea Bonita');
        cy.get('#form-submit').click();

        cy.get('.label-task')
            .should('contain', 'Nueva tarea Bonita')
    })
})
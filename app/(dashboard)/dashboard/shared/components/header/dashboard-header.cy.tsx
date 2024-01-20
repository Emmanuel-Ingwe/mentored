import DashboardHomeHeader from '.';

describe('<DashboardHeader />', () => {
  it('should render and display expected content', () => {
    cy.mount(<DashboardHomeHeader />);

    cy.get('h1').contains('Welcome back');

    cy.get('p').contains('You have');

    cy.get('a[href="/dashboard/sessions"]').should('be.visible');
  });
});

export {};

import { IroncontactsPage } from './app.po';

describe('ironcontacts App', () => {
  let page: IroncontactsPage;

  beforeEach(() => {
    page = new IroncontactsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

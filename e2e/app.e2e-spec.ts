import { Ng4BookstorePage } from './app.po';

describe('ng4-bookstore App', () => {
  let page: Ng4BookstorePage;

  beforeEach(() => {
    page = new Ng4BookstorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

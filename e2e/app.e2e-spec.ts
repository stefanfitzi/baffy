import { BafappPage } from './app.po';

describe('bafapp App', () => {
  let page: BafappPage;

  beforeEach(() => {
    page = new BafappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

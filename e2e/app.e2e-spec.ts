import { BafappPage } from './app.po';

describe('bafapp App', function() {
  let page: BafappPage;

  beforeEach(() => {
    page = new BafappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

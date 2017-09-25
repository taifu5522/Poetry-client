import { PoetryClientPage } from './app.po';

describe('poetry-client App', () => {
  let page: PoetryClientPage;

  beforeEach(() => {
    page = new PoetryClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

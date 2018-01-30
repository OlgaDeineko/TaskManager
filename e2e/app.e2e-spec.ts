import { TesttaskPage } from './app.po';

describe('testtask App', () => {
  let page: TesttaskPage;

  beforeEach(() => {
    page = new TesttaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

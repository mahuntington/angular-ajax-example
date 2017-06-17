import { AjaxPage } from './app.po';

describe('ajax App', () => {
  let page: AjaxPage;

  beforeEach(() => {
    page = new AjaxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

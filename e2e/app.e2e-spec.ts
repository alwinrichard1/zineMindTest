import { ZineMindTestPage } from './app.po';

describe('zine-mind-test App', () => {
  let page: ZineMindTestPage;

  beforeEach(() => {
    page = new ZineMindTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

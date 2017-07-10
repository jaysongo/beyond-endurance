import { BeyondEnduranceAppPage } from './app.po';

describe('beyond-endurance-app App', () => {
  let page: BeyondEnduranceAppPage;

  beforeEach(() => {
    page = new BeyondEnduranceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

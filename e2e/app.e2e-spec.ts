import { Ng2ModalDevPage } from './app.po';

describe('ng2-modal-dev App', function() {
  let page: Ng2ModalDevPage;

  beforeEach(() => {
    page = new Ng2ModalDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

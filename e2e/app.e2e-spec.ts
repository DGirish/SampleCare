import { CarePointAppV1Page } from './app.po';

describe('care-point-app-v1 App', () => {
  let page: CarePointAppV1Page;

  beforeEach(() => {
    page = new CarePointAppV1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

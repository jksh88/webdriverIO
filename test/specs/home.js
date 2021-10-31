import HomePage from '../pages/home-page.js';

describe('Home', () => {
  it('Open url and assert title', async () => {
    await HomePage.open();
  });

  it('Open About Page and assert url', async () => {
    await browser.url('/about');
    await expect(browser).toHaveUrl(
      'https://practice.automationbro.com/about/'
    );
  });

  it('Click get started btn and assert url contains get-started text', async () => {
    await HomePage.open();
    await HomePage.startedBtn.click();
    await expect(browser).toHaveUrlContaining('get-started');
  });

  it('logo click leads to url that doesn not contain get-started text', async () => {
    await HomePage.open();
    await HomePage.customLogo.click();
    await expect(browser).not.toHaveUrlContaining('get-started');
  });

  it('find heading element and assert its text', async () => {
    await HomePage.open();
    await expect(HomePage.slogan).toHaveText(
      'Think different. Make different.'
    );
  });
});

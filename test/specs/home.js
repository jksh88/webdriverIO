// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe('Home', () => {
  it('logo click leads to url that doesn not contain get-started text', async () => {
    await browser.url('https://practice.automationbro.com');
    // await $('//img[@alt="Practice E-Commerce Site"]').click();
    await $('.custom-logo').click();
    await expect(browser).not.toHaveUrlContaining('get-started');
  });
});

// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe('Home', () => {
  // it('logo click leads to url that doesn not contain get-started text', async () => {
  //   await browser.url('https://practice.automationbro.com');
  //   // await $('//img[@alt="Practice E-Commerce Site"]').click();
  //   const logo = await $('.custom-logo');
  //   await logo.click();
  //   await expect(browser).not.toHaveUrlContaining('get-started');
  // });

  it('find heading element and assert its text', async () => {
    await browser.url('https://practice.automationbro.com');

    const elem = await $('.elementor-widget-container > h1');
    console.log('ELEM: ', elem);
    // const heading = await elem.getText();
    // await expect(heading).toEqual('Think different. Make different.');
    await expect(elem).toHaveText('Think different. Make different.');
  });
});

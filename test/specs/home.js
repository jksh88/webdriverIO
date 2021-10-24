// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe('Home', () => {
  // it('Open url and assert the title', async () => {
  //   //open url
  //   const t = await browser.url('https://practice.automationbro.com/');
  //   // console.log('t: ', t);
  //   // console.log(await browser.getUrl());
  //   // console.log('browser: ', browser);

  //   //assert title
  //   await expect(browser).toHaveTitle(
  //     'Practice E-Commerce Site – Automation Bro'
  //   );
  // });

  // it('assert about url', async () => {
  //   await browser.url('https://practice.automationbro.com/about');

  //   await expect(await browser.getUrl()).toEqual(
  //     'https://practice.automationbro.com/about/'
  //   );
  // });

  // it('assert url but with toHaveUrl', async () => {
  //   await browser.url('https://practice.automationbro.com/about');

  //   await expect(browser).toHaveUrl(
  //     'https://practice.automationbro.com/about/'
  //   );
  // });

  it('click get started button and verify url', async () => {
    await browser.url('https://practice.automationbro.com/');
    const getStartedBtn = await $('#get-started');
    await getStartedBtn.click();
    await expect(browser).toHaveUrlContaining('get-started');
  });
});

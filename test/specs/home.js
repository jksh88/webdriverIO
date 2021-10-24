// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe('Home', () => {
  it('Open url and assert the title', () => {
    //open url
    browser.url('https://practice.automationbro.com/');

    //assert title
    expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
  });
});

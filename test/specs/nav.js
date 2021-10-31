const { link } = require('fs');
import NavComponent from '../pages/components/nav-comp.js';

describe('nav', () => {
  it('Get the texts of all menu items and assert them', async () => {
    await browser.url('/');

    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];

    // const elems = await $$('#primary-menu > li[id^="menu"]');
    const elems = await NavComponent.linksNavMenu;
    // console.log('ELEMS: ', elems);
    console.log('**** first element text: ', await elems[0].getText());

    for (let i = 0; i < elems.length; i++) {
      // let elem = await elems[i];
      expect(expectedLinks[i]).toHaveText(await elems[i]);
    }
  });
});

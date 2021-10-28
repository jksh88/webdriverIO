describe('nav', () => {
  it.only('Get the texts of all menu items and assert them -- using wait commands', async () => {
    browser.pause(500);
    browser.url('/');

    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];

    const elems = await $$('#primary-menu > li[id^="menu"]');
    console.log('**** first element text: ', await elems[0].getText());

    for (let i = 0; i < elems.length; i++) {
      // let elem = await elems[i];
      expect(expectedLinks[i]).toEqual(await elems[i].getText());
    }
  });
});

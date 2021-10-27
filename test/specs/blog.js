describe('blog', () => {
  it('text is over 10 characters AND we get 4 elements', async () => {
    await browser.url('/blog');
    const links = await $$('#recent-posts-3 > ul > li > a');
    // console.log('%%%%%%%%LINKS: ', links);
    for (let link of links) {
      const text = await link.getText();
      // console.log('*************LINK: ', link);
      console.log('888888888_Length: ', text.length);
      await expect(text.length).toBeGreaterThanOrEqual(10);
    }
    await expect(links.length).toEqual(4);
    console.log('element length: ', links.length);
  });
});

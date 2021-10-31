import HomePage from '../pages/home-page';

describe('blog', () => {
  it('text is over 10 characters AND we get 4 elements', async () => {
    await browser.url('/blog');
    // const posts = await $$('#recent-posts-3 > ul > li > a');
    // console.log('%%%%%%%%POSTS: ', posts);
    const posts = await HomePage.BlogComponent.postsBlog;
    for (let post of posts) {
      const text = await post.getText();
      // console.log('*************LINK: ', post);
      console.log('888888888_Length: ', text.length);
      await expect(text.length).toBeGreaterThanOrEqual(10);
    }
    await expect(posts.length).toEqual(5);
    console.log('element length: ', posts.length);
  });
});

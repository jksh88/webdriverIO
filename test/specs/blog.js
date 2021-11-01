import BlogPage from '../pages/blog-page';

describe('blog', () => {
  it('text is over 10 characters AND we get 4 elements', async () => {
    await BlogPage.open();
    const posts = await BlogPage.postsBlog;
    for (let post of posts) {
      const text = await post.getText();
      console.log('*************LINK: ', post);
      console.log('888888888_Length: ', text.length);
      await expect(text.length).toBeGreaterThanOrEqual(10);
    }
    await expect(posts.length).toEqual(5);
    console.log('element length: ', posts.length);
  });
});

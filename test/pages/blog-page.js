class BlogPage {
  open() {
    return browser.url('/blog');
  }

  get postsBlog() {
    return $$('#recent-posts-3 > ul > li > a');
  }
}

export default new BlogPage();

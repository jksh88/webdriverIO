class BlogComponent {
  get postsBlog() {
    return $$('#recent-posts-3 > ul > li > a');
  }
}

export default new BlogComponent();

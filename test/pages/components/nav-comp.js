class NavComponent {
  get linksNavMenu() {
    return $$('#primary-menu > li[id^="menu"]');
  }
}

export default new NavComponent();

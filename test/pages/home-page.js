import NavComponent from './components/nav-comp';
import BlogComponent from './components/blog-comp';

class HomePage {
  open() {
    return browser.url('/');
  }

  get startedBtn() {
    return $('#get-started');
  }

  get customLogo() {
    return $('img.custom-logo');
  }

  get slogan() {
    return $('.elementor-widget-container > h1');
  }

  get NavComponent() {
    return NavComponent;
  }

  get BlogComponent() {
    return BlogComponent;
  }
}

export default new HomePage();

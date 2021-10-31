import NavComponent from './components/nav-comp';
import BlogComponent from './components/blog-comp';
import ContactComponent from './components/contact-comp';

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

  get ContactComponent() {
    return ContactComponent;
  }
}

export default new HomePage();

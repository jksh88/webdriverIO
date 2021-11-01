import NavComponent from './components/nav-comp';

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
}

export default new HomePage();

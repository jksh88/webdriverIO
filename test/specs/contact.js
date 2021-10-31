import HomePage from '../pages/home-page';

describe('contact', () => {
  it('fill in textfield and submit', async () => {
    await browser.url('/contact');
    await HomePage.ContactComponent.name.addValue('Jojo');
    await HomePage.ContactComponent.email.addValue('test@test.mail');
    await HomePage.ContactComponent.phone.addValue('111-111-1111');
    await HomePage.ContactComponent.message.addValue('Hello');

    // await browser.debug();

    await HomePage.ContactComponent.submitBtn.click();

    // browser.pause();
    const successAlert = await $("[role='alert']");
    // console.log('SUCCESSALERT: ', await successAlert.getText());
    await expect(successAlert).toHaveTextContaining(
      'Thanks for contacting us!'
    );
  });
});

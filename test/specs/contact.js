import ContactPage from '../pages/contact-page';

describe('contact', () => {
  it('fill in textfield and submit', async () => {
    await ContactPage.open();
    await ContactPage.name.addValue('Jojo');
    await ContactPage.email.addValue('test@test.mail');
    await ContactPage.phone.addValue('111-111-1111');
    await ContactPage.message.addValue('Hello');

    // await browser.debug();

    await ContactPage.submitBtn.click();

    // browser.pause();
    const successAlert = await $("[role='alert']");
    // console.log('SUCCESSALERT: ', await successAlert.getText());
    await expect(successAlert).toHaveTextContaining(
      'Thanks for contacting us!'
    );
  });
});

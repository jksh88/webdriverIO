import ContactPage from '../pages/contact-page';
import * as faker from 'faker';

describe('contact', () => {
  it('fill in textfield and submit', async () => {
    await ContactPage.open();
    await ContactPage.name.addValue(faker.name.findName());
    await ContactPage.email.addValue(faker.internet.email());
    await ContactPage.phone.addValue(faker.phone.phoneNumber());
    await ContactPage.message.addValue(faker.lorem.paragraphs(2));

    await ContactPage.submitBtn.click();

    // browser.pause();
    const successAlert = await $("[role='alert']");
    // console.log('SUCCESSALERT: ', await successAlert.getText());
    await expect(successAlert).toHaveTextContaining(
      'Thanks for contacting us!'
    );
  });
});

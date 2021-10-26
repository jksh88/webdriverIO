describe('form submission', async () => {
  it('should set form value and submit the form', async () => {
    await browser.url('/contact');
    // const name = await $('#evf-277-field_ys0GeZISRs-1');
    const name = await $('.contact-name  input');
    await name.setValue('ezra');
    const email = await $('#evf-277-field_LbH5NxasXM-2');
    await email.setValue('mail@mail.com');
    const phone = await $('#evf-277-field_66FR384cge-3');
    await phone.setValue('111-111-1111');
    const text = await $('#evf-277-field_yhGx3FOwr2-4');
    await text.setValue('sample input here');
    // const button = await $("'button[name='everest_forms[submit]']'");
    const button = await $('#evf-submit-277');
    await button.click();
    const alert = await $(
      'div[class="everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll"]'
    );

    const alertText = await alert.getText();
    await expect(alertText).toEqual(
      'Thanks for contacting us! We will be in touch with you shortly'
    );
  });
});

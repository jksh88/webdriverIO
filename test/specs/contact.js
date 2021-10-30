describe('contact', () => {
  it('fill in textfield and submit', async () => {
    await browser.url('/contact');
    await $('#evf-277-field_ys0GeZISRs-1').addValue('Jojo');
    await $('#evf-277-field_LbH5NxasXM-2').addValue('test@test.mail');
    await $('#evf-277-field_66FR384cge-3').addValue('111-111-1111');
    await $('#evf-277-field_yhGx3FOwr2-4').addValue('Hello');

    // await browser.debug();

    await $('button[type="submit"]').click();

    // browser.pause();
    const successAlert = await $("[role='alert']");
    // console.log('SUCCESSALERT: ', await successAlert.getText());
    await expect(successAlert).toHaveTextContaining(
      'Thanks for contacting us!'
    );
  });
});

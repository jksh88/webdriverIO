class ContactPage {
  open() {
    return browser.url('/contact');
  }

  get name() {
    return $('#evf-277-field_ys0GeZISRs-1');
  }

  get email() {
    return $('#evf-277-field_LbH5NxasXM-2');
  }

  get phone() {
    return $('#evf-277-field_66FR384cge-3');
  }

  get message() {
    return $('#evf-277-field_yhGx3FOwr2-4');
  }

  get submitBtn() {
    return $('button[type="submit"]');
  }
}

export default new ContactPage();

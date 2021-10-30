const path = require('path');

describe('upload test', () => {
  it('find hidden choose file btn and upload', async () => {
    await browser.url('https://practice.automationbro.com/cart/');
    const fileUpload = await $('#upfile_1');
    // console.log('fileUpload*************: ', fileUpload);
    // fileUpload.classList.remove('file_input_hidden');
    browser.execute((fileUpload.className = ''));
    fileUpload.waitForDisplayed();

    const filePath = path.join(__dirname, '../data/spinnerlogo.png');

    const remoteFilePath = await browser.uploadFile(filePath);
    await $('#upfile_1').setValue(remoteFilePath);
    await $('#upload_1').click();

    await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining(
      'uploaded successfully'
    );
  });
});

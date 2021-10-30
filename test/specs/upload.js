const path = require('path');

describe('Upload tests', () => {
  it('simple upload tests', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload');
    const filePath = path.join(__dirname, '../data/kangaroo.svg');
    // console.log(__dirname);

    const remoteFilePath = await browser.uploadFile(filePath);
    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();

    const successText = 'File Uploaded!';
    const elem = await $('.example > h3');
    console.log('**********ELEMtext: ', elem.getText());

    await expect(elem).toHaveText(successText);
    // await expect(await elem.getText()).toEqual(successText);

    // /Users/joohoonkim/Documents/SE/webdriverIO/test/specs
    // /Users/joohoonkim/Documents/SE/webdriverIO/test/data/kangaroo.svg
  });
});

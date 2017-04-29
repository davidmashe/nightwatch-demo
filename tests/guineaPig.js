var config = require('../nightwatch.conf.js');

module.exports = {
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot('./screenshots/one.png')
      .clearValue('#i_am_a_textbox')
      .setValue('#i_am_a_textbox', 'nightwatch roolz!')
      .saveScreenshot('./screenshots/two.png')
      .pause(3000)
      .end();
  }
};

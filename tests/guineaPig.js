var config = require('../nightwatch.conf.js');

module.exports = {
  '@tags': ['githubLogin'],
  'Github Login Works': function(browser) {
    browser
      .url('https://www.github.com')
      .waitForElementVisible('body')
      .assert.title('The world\'s leading software development platform · GitHub')
      .click("body > div.position-relative.js-header-wrapper > header > div > div > div > a:nth-child(2)")
      .waitForElementVisible('#login_field')
      .waitForElementVisible('#password')
      .setValue('#login_field', process.env.GITHUB_LOGIN)
      .setValue('#password', process.env.GITHUB_PASSWORD)
      .click('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block')
      .pause(1000)
      .assert.title('GitHub')
      .saveScreenshot('./screenshots/login.png')
      .end();
  }
};

const assert = require('assert');

Feature('linkedin');

Scenario('TCOO1-Linkedin search for specific company job offer', async ({ I }) => {
    I.amOnPage('/');
    I.click('Accept', 'xpath=//html/body/div[1]/div/section/div/div[2]/button[1]');
    I.click('Jobs', 'xpath=//html/body/nav/ul/li[4]/a/span');
    I.fillField('form input[name=keywords]', 'Linkmobility');
    I.fillField('form input[name=location]', 'Sofia, Sofia City, Bulgaria');
    I.click('xpath=//html/body/div[1]/header/nav/section/section[2]/form/button');
    I.click('Java Software Engineer');
    I.waitForElement('xpath=//html/body/div[1]/div/section/div[2]/section/div/div[1]/div/a/h2', 5);
    I.rightClick('Java Software Engineer', 'xpath=//html/body/div[1]/div/section/div[2]/section/div/div[1]/div/a/h2');
    I.waitForClickable('Open link in new tab');
    I.click('Java Software Engineer', 'xpath=//html/body/div[1]/div/section/div[2]/section/div/div[1]/div/a/h2');
        let expectedResult = 'Java Software Engineer'
        let actualResult = await I.grabTextFrom('//*[@id="main-content"]/section[1]/div/section[2]/div/div[1]/div/h1');
        assert.equal(expectedResult, actualResult);
});


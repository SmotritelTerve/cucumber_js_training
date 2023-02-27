const { Then } = require('@wdio/cucumber-framework');
const { page } = require('../po');
const compareText = require("./utils/compre-text")

Then('Page title should {string} {string}', async function (shouldBeParameter, titleText) {
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParameter);
});

Then(/^modal window should( not)? be displayed$/, async function (notArg) {
    let assert = expect(page('doctors').addDoctorModal.rootEl);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toBeDisplayed();
});
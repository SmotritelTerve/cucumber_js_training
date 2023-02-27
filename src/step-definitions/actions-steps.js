const { Given, When } = require('@wdio/cucumber-framework');
const { page } = require('../po');

Given('I open {string} page', function(pageName) {
    return page(pageName).open();
});

When(/^I click "(.*)" link from the side menu$/, function(link){
    return page('dashboard').sideMenu.item(link).click();
});

// When('I click "Doctors" link from the side menu', function(link){
//     return pages('dashboard').sideMenu.item("Doctors").click();
// });

When('I click add new doctor button from list header', function(){
    return page('doctors').doctorListHeader.addNewDoctorBtn.click();
});

When(/^I click "(.*)" button in the modal window$/, function(button){
    return page('doctors').addDoctorModal.clickButton(button);
});

When('I wait {int} seconds', function(timeToWaitInSeconds) {
    return browser.pause(timeToWaitInSeconds * 1000);
});
const { Before } = require("@wdio/cucumber-framework");

Before({name: 'console log', tags: '@3'}, () => {
    return console.log('before hook');
});
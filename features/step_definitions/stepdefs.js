const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isThisPlayerTheGOAT (player) {
    if (player == "Messi") return 'Definitely!';
    return 'You must be kidding';
}

Given('{string} is the GOAT', function (player) {
    this.goat = player;
});

When('I ask whether it\'s true', function () {
    this.actualAnswer = isThisPlayerTheGOAT(this.goat);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
})
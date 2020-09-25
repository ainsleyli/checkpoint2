var enterPage = {}

var useArray = require('../TestAsset/empData')

module.exports = {
    beforeEach: browser => {
        enterPage = browser.page.emp3Ob()
        enterPage
            .navigate()
    },
    after: browser => {
        enterPage
            .end()
    },
    'enter test': browser => {
        useArray.forEach(test => (
            enterPage
                .enter(enterPage, test)
        ))
    },
    'search test': browser => {

        enterPage
            .click('@searchBar')
            .setValue('@searchBar', 'Steve')
            .useXpath()
            .click('//*[text()="Steve Harrington"]')
            .useCss()
            .verify.containsText('@empTitle', 'Steve Harrington')
    },
    'delete test': browser => {

        enterPage
            .click('@searchBar')
            .setValue('@searchBar', 'Jalapeno')
            .useXpath()
            .click('//*[text()="Jalapeno Pupper"]')
            .verify.containsText('@empTitle', 'Jalapeno Pupper')
            .useCss()
            .click('@delete')
            .api.acceptAlert()

    }
}






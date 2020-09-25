var enterCommands = {
// add an employee test
    enter: function (browser,data) {
        this
            .click('@addEmployee')    
            .click('@newEmployee')
            .clearValue('@name')
            .setValue('@name', data.Name)
            .verify.valueContains('@name', data.Name)
            .clearValue('@number')
            .setValue('@number', data.Number)
            .verify.valueContains('@number', data.Number)
            .clearValue('@email')
            .setValue('@email',data.Email)
            .verify.valueContains('@email',data.Email)
            .clearValue('@title')
            .setValue('@title', data.Title)
            .click('@submit')
            .verify.valueContains('@title', data.Title)
        return this

    }
}


module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [enterCommands],
    elements: {
        name: '[name="nameEntry"]',
        number: '[name="phoneEntry"]',
        title: '[name="titleEntry"]',
        email: '[name="emailEntry"]',
        submit: '#saveBtn',
        idNumber: '#employeeID',
        delete: '[name="delete"]',
        searchBar: '[name="searchBox"]',
        empTitle: '#employeeTitle',

        addEmployee: {
            selector: '//*[text()=" + Add Employee "]',
            locateStrategy: 'xpath'

        },
        newEmployee: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        }
    }
}
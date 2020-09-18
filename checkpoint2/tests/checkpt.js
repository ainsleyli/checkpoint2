var testPage ={}
module.exports ={
    beforeEach: browser => {
        testPage = browser.page.cp2()
        

    },
    after: browser => {
        testPage
            .end()

    },
    'Evens and Odds' : browser => {
        var wholenumber = '1,2,3,4,5'
        var evenNumber ='2,4'
        var oddNumber = '1,3,5'
        var decimalnumber = '1.2'
        var fraction= '1/2'
        var special ='.'

        testPage
            .navigate()
            //testing for whole number
            .click('@entry1')
            .setValue('@entry1', wholenumber)
            .click('@splitButton')
            .waitForElementVisible('@entry1')
            .verify.containsText('@even',evenNumber)
            .verify.containsText('@odd', oddNumber)

            //testing for decimal number
            .click('@entry1')
            .clearValue('@entry1')
            .setValue('@entry1', wholenumber)
            .click('@splitButton')
            .waitForElementVisible('@entry1')
            .verify.containsText('@odd', '1')

            //testing for fractions
            .click('@entry1')
            .clearValue('@entry1')
            .setValue('@entry1', fraction)
            .click('@splitButton')
            .waitForElementVisible('@entry1')
            .verify.containsText('@odd', '1')

            //testing for special character
            .click('@entry1')
            .clearValue('@entry1')
            .setValue('@entry1', special)
            .click('@splitButton')
            .waitForElementVisible('@entry1')
            .verify.containsText('@odd', 'null')
           
    },
    'Filter Object' : browser => {
        var obj1 = 'hairColor'
        var o1result = '{ "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }'
        var obj2 = 'haircolor'
        var obj3 = 'brown'
        var error3 = ''
       
        testPage
            .navigate()
            //testing for the function itself
            .click('@entry2')
            .setValue('@entry2', obj1)
            .click('@f1')
            .waitForElementVisible('@entry2')
            .verify.containsText('@r1',o1result)
            //testing if it's case senstive
            .click('@entry2')
            .clearValue('@entry2')
            .setValue('@entry2', obj2)
            .click('@f1')
            .waitForElementVisible('@entry2')
            .verify.containsText('@r1',error3)
            //testing if we can  use a string istead
            .click('@entry2')
            .clearValue('@entry2')
            .setValue('@entry2', obj3)
            .click('@f1')
            .waitForElementVisible('@entry2')
            .verify.containsText('@r1',error3)


    },
    'Filter String' : browser => {
        var s1 = 'M'
        var rs1= '"Melody", "Mark", "Maddy"'
        var s2 = 'mark'
        var rs2 = 'Mark'
        var error4 =''
       
        testPage
            .navigate()
            .click('@entry3')
            .setValue('@entry3',s1)
            .click('@f2')
            .waitForElementVisible ('@entry3')
            .verify.containsText('@r2',rs1)
            //testing if it's case sensitive
            .clearValue('@entry3')
            .setValue ('@entry3', s2)
            .click('@f2')
            .waitForElementVisible ('@entry3')
            .verify.containsText('@r2',error4)

    },
    'Palindrome Test': browser => {
        var word1 = 'eye'
        var word2 = 'eyes'
        var csword= 'Eye'
        var sentence = 'do geese see god'
        var tru = 'true'
        var fal = 'false'
       
        testPage
            .navigate()
            .click('@entry4')
            .setValue ('@entry4',word1)
            .click('@check')
            .waitForElementVisible('@entry4')
            .verify.containsText('@r3',tru)

            //testing for a false answer
            .clearValue('@entry4')
            .setValue ('@entry4',word2)
            .click('@check')
            .waitForElementVisible('@entry4')
            .verify.containsText('@r3',fal)
            //testing for a case sensitiv word
            .clearValue('@entry4')
            .setValue ('@entry4',csword)
            .click('@check')
            .waitForElementVisible('@entry4')
            .verify.containsText('@r3',fal)
            //testing for a sentense
            .clearValue('@entry4')
            .setValue ('@entry4',sentence)
            .click('@check')
            .waitForElementVisible('@entry4')
            .verify.containsText('@r3',fal)

    },
    'Sum Test' : browser => {
        var n1 = 1
        var n2 = 2
        var sumWholeNumber = 3
        var d1= 1.4
        var d2= 4.8
        var sumDecimal= 6.2
        var neg1 = -1
        var sumNegative = 1
  
        testPage
            .navigate()
            //testing for whole number
            .click('@entry5')
            .setValue('@entry5',n1)
            .setValue('@entry6',n2)
            .click('@add')
            .waitForElementVisible ('@r4')
            .verify.containsText('@r4',sumWholeNumber)

            //testing for decimal number
            .clearValue ('@entry5')
            .clearValue('@entry6')
            .setValue('@entry5',d1)
            .setValue('@entry6',d2)
            .click('@add')
            .waitForElementVisible ('@r4')
            .verify.containsText('@r4',sumDecimal)

            //testing for negative numbers 
            .clearValue ('@entry5')
            .clearValue('@entry6')
            .setValue('@entry5',neg1)
            .setValue('@entry6',n2)
            .click('@add')
            .waitForElementVisible ('@r4')
            .verify.containsText('@r4',sumNegative)
    }


}
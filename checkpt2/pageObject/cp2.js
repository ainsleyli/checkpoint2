module.exports ={
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements :{
        // for Even and Odd Test
        entry1: '[name ="evenOddInput"]',
        splitButton: '[name="evenOddButton"]',
        even: '[name="evenResults"]',
        odd: '[name="oddResults"]',
// for filter object tests
        entry2: '[name = "objectFilterInput"]',
        f1: '[name = "objectFilterButton"]',
        r1: '[name="objectFilterResults"]',
    
        //for filter string test
        entry3: '#nameFilterInput',
        f2: '#nameFilterButton',
        r2: '[name="nameFilterResults"]',

        //for palindrome test
        entry4: '[name="palindromeInput"]',
        check: '[name="palindromeButton"]',
        r3: '[name="palindromeResults"]',

        //for sum test
        entry5: '[name = "sumInput1"]',
        entry6: '[name = "sumInput2"]',
        add: '[name="sumButton"]',
        r4: '[name="sumResults"]'
   
    }
}
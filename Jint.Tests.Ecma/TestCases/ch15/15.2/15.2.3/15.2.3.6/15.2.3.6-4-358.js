/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-358.js
 * @description ES5 Attributes - success to update [[Enumerable]] attribute of data property ([[Writable]] is false, [[Enumerable]] is true, [[Configurable]] is true) to different value
 */


function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: 2010,
            writable: false,
            enumerable: true,
            configurable: true
        });
        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        Object.defineProperty(obj, "prop", {
            enumerable: false
        });
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

        return propertyDefineCorrect && desc1.enumerable === true && obj.prop === 2010 && desc2.enumerable === false;
    }
runTestCase(testcase);

/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-52.js
 * @description Object.defineProperty - 'desc' is generic descriptor without any attribute, test 'name' is defined in 'obj' with all default attribute values (8.12.9 step 4.a.i)
 */


function testcase() {
        var obj = {};

        Object.defineProperty(obj, "property", {});

        return dataPropertyAttributesAreCorrect(obj, "property", undefined, false, false, false);
    }
runTestCase(testcase);

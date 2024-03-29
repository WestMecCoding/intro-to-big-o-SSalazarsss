let someStr;
let charCount;
function revStrFor(str) { 
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) { 
        revStr += str[i];
    }
    return revStr;
}
function buildStr(n) { 
    let str = "";
    for (let i = 1; i <= n; i++) { 
        str += "a";
    }
    return str;
}
charCount = 10;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);
charCount = 100;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);
charCount = 1000;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);

charCount = 10000;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);

charCount = 100000;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);


charCount = 1000000;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);
// console.log(revStrFor(someStr));

function showTime(n) { 
    
    charcount = n;
    somestr = buildStr(charcount);
    console.time(`for loop reverse string ${charcount}`);
    revStrFor(somestr);
    console.timeEnd(`for loop reverse string ${charcount}`);
}
function showTimeArr(n) { 

    charcount = n;
    somestr = buildStr(charcount);
    console.time(`arr string ${charcount}`);
    revStrArr(somestr);
    console.timeEnd(`arr reverse string ${charcount}`);
}
showTime(10);
showTimeArr(10);
showTime(100);
showTimeArr(100);
showTime(1000);
showTimeArr(1000);
showTime(10000);
showTimeArr(10000);
showTime(100000);
showTimeArr(1000000);
showTime(1000000);
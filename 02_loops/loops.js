function repeat(str, times) {
    "use strict";
    var result = "";
    return times > 0 ? new Array(times + 1).join(str) : result;
}

function join(arr) {
    "use strict";
    var delimiter = arguments[1] || "",
        result    = "";
    arr.forEach(function (el, idx) {
        result += (idx !== arr.length - 1) ? el + delimiter : el;
    });
    return result;
}

function sum(arr) {
    "use strict";
    return arr.reduce(function(a, b) {
        return a + b;
    }, 0);
}

function paramify(obj) {
   "use strict";
   var props     = [],
       separator = "&";
   for (var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
           props.push(prop);
       }
   }
   props.sort();
   return join(props.map(function(prop) {
        return prop + "=" + obj[prop];
   }), "&");
}

function factorial(num) {
    "use strict";
    if (num === 0) { return 1; }
    return num * factorial(num - 1);
}

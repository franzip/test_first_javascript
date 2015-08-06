function f2c(fahrenheit) {
    "use strict";
    return Math.round((fahrenheit - 32) / 1.8);
}

function c2f(celsius) {
    "use strict";
    return Math.round(celsius * 1.8) + 32;
}

var Temperature = function() {
    "use strict";
    var fahr = arguments[0] || 0,
        cels = f2c(fahr);

    return {
        setFahrenheit: function(fahrenheit) {
            fahr = fahrenheit;
            cels = f2c(fahrenheit);
        },

        setCelcius: function(celcius) {
            cels = celcius;
            fahr = c2f(celcius);
        },

        fahrenheit: function() {
            return fahr;
        },

        celcius: function() {
            return cels;
        }
    };
};

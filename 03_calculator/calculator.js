function Calculator() {
    "use strict";
    this.stack = [0];
}

Calculator.prototype = {

    value: function() {
        "use strict";
        return this.stack[this.stack.length - 1];
    },

    add: function(val) {
        "use strict";
        this.push(val);
        this.plus();
    },

    plus: function() {
        "use strict";
        this.push(this.pop() + this.pop());
    },

    subtract: function(val) {
        "use strict";
        this.push(val);
        this.minus();
    },

    minus: function() {
        "use strict";
        var op2 = this.pop(),
            op1 = this.pop();
        this.push(op1 - op2);
    },

    divide: function() {
        "use strict";
        var op2 = this.pop(),
            op1 = this.pop();
        this.push(op1 / op2);
    },

    times: function() {
         "use strict";
         this.push(this.pop() * this.pop());
    },

    pop: function() {
        "use strict";
        if (this.stack.length === 0) {
            throw "calculator is empty";
        }
        return this.stack.pop();
    },

    push: function(val) {
         "use strict";
         this.stack.push(val);
    }
};

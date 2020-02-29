/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.array = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.array.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.array.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.array.reduce((a, b) => a - b > 0 ? b : a)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
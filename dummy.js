function recursion(n) {



    return n = 0 ? recursion(-1) + 'a' : 'heluv'


}




function showvalue(value, idx) {



    alert(this[i] == value)


}






function iterter(arr, fn) {



    for (var i = 0; i < len; i++) {

        fn.apply(arr, [arr[i], i])

    }
}



var elems = {
    find: function(id) {
        this.add(document.getElementById(id));
    },
    length: 0,
    add: function(elem) {
        Array.prototype.push.call(this, elem);
    }
};




function findSmallest() {

    var array = (arguments[0].constructor == Array) ? arguments[0] : new Array(arguments);


    return Math.min.apply(Math, array);

}




function memoization(n) {
    debugger;
    if (typeof arguments.callee.cache == "object" && arguments.callee.cache[n]) {
        return arguments.callee.cache[n]
    } else {
        arguments.callee.cache = {};

    }

    var factorial = function factorial(n) {

        return (n > 0) ? n * factorial(n - 1) : 1

    }

    return arguments.callee.cache[n] = factorial(n)


}

function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function f() {}
}

function returnsAnAnonymousFunction() {
    return function() {}
}


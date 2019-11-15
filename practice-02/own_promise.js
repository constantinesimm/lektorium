function chain(...args) {
    let fn = args.pop();                    //get last argument that is a func
    let fnResult = fn.apply(this, args);    //get last arg func result with current arguments

    return { then: function (...args1) {     //return then method
            let cb = args1.pop();           //get this step last argument that is func
            return chain.apply(this, [...args1, fnResult, cb])  //scope with current args, function result and new func
        }
    }
}


//test
chain('20', function(value) {
    console.log(value);
    let param = 1;
    console.log(param);
    return param;
}).then('a', 'b', function(a, b, param) {
    console.log(++param);
    return param;
}).then(function(param) {
    console.log(++param);
    return param;
})

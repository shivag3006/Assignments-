console.log('Script start');

setTimeout(() => {                  // it will Store in CallBack Queue... 2nd this
    console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {      // It will Store in MicroTask Queue..... 1St importance
    console.log('Promise resolved');
});
// if we have more 100 lines of code is there, then the 100lines of code will excuted in CallStack, 
// Later last line of Code "Script End" will excute in callStack memory. after all this code excution, The above code will excute
console.log('Script end');

// OUT-PUT:
/*  Script start
    Script end
    Promise resolved
    Timeout callback
*/

/* ==========================Execution Flow  ======================
Synchronous Code:
    console.log('Script start');
    console.log('Script end');

Microtask Queue:
    Promise callback: console.log('Promise resolved');

Callback Queue:
    Timeout callback: console.log('Timeout callback');          */
// Immediately Invoked Function Expressions (IIFE)

// iife is used to imediately invoke function and prevent it from global scope pollution
(function code (){
    //named iife
    console.log('DB Connected');
})();

// (function andpractice(){
//     console.log('DB disconnected');
// })()


( () =>{
    console.log('Arrow function also works in iife');
})();

( (name) => {
    console.log(`My name is ${name}`);
})('Saniya')


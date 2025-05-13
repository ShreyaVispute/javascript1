//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB Connected`);
})();//;needed to end iife
//()() declaration execution
/**global scope ke variables se hone wale pollution ko hatane ke liye iife use hota hai
 * iife is used for immediate execution
 */
((name)=> {
    console.log(`DB connected two ${name}`)
})('shreya');
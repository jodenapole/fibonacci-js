/**
 * The query selector gets the element from the DOM based on three things:
 * their class name
 * their id
 * their tag name itself
 * 
 * You can test changing the way you'll get the element from the DOM
 * by changing from one to another to better understand how it works.
 * 
 * I highly recommend using querySelector instead of other ways
 * beacause querySelector is highly consistent in its syntax.
 * Ways like GetElementById or GetElementByClassName both
 * have different syntaxes between themselves and can confuse
 * the programmer while writing code.
 */
const xNumber = document.querySelector('.x-number')
const yNumber = document.querySelector('.y-number')

/**
 * A function is just a way of encapsulating several lines of code
 * into one place. You know you're gonna need a function when
 * you're gonna need that code more than once. It's never good
 * to write the same code twice. If that happen, wrap that into
 * a function.
 * 
 * Params or Arguments are ways to pass values inside a function
 * to do whatever you need to. Always depends on the use case.
 * It's usually clear when you need to do that.
 */
function calcFib() {
    let fibArray = [] //Initialize array!

    fibArray[0] = 0;
    fibArray[1] = 1;

    /**
     * A for loop it's just a different type of function.
     * The only difference is you're gonna run that code
     * on and on for as many times you want.
     */
    for (let i = 2; i <= 20; i++) {
        fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
        
        yNumber.innerHTML = fibArray[xNumber.value]
    }
}
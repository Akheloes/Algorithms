/**
 * Solving the "Balanced brackets" problem in a much cleaner fashion by stacking and distacking the
 * opening and closing brackets of the same kind
 */

var stack = require('./stack.js').stack; 

// Utility definitions and functions
const brackets = {
    parentheses : { open: "(", close: ")" }, 
    squareBracket : { open: "[", close: "]" }, 
    curlyBracket : { open: "{", close: "}" }
 }

 function isOpener(bracket) {
     if(bracket === brackets.parentheses.open ||  
        bracket === brackets.squareBracket.open || 
        bracket === brackets.curlyBracket.open) return true; 
    else return false; 
 }

 function isCloser(bracket) {
    if(bracket === brackets.parentheses.close ||  
       bracket === brackets.squareBracket.close || 
       bracket === brackets.curlyBracket.close) return true; 
   else return false; 
}

function isSameKind(bracketOpener, bracketCloser) {
    if(bracketOpener === brackets.parentheses.open && bracketCloser === brackets.parentheses.close) return true; 
    if(bracketOpener === brackets.squareBracket.open && bracketCloser === brackets.squareBracket.close) return true; 
    if(bracketOpener === brackets.curlyBracket.open && bracketCloser === brackets.curlyBracket.close) return true; 
    return false; 
}

// Core algorithm

 function isBalanced(problem) {

    stack.clear(); 

    problem.split('').forEach(element => {
        //if opener stack it
        if(isOpener(element)) { stack.push(element); }
        //if closer compare it to top of the stack, if not of same kind, return false
        if(isCloser(element)) { 
            if(!isSameKind(stack.peek(), element)) {
                return false; 
            }
            else {
                //pop-off the top-stack then continue
                stack.pop(); 
            }
        }
    });

    return stack.storage.length === 0 ;
 }

 console.log("Is balanced ? ", isBalanced(process.argv[2]));

/**
 * A function which takes a a function to time 'timedFunction' and performance-times its execution.
 * All arguments of the 'timedFunction'
 */
function consoleTimer(label, timedFunction, ...args) {
    console.time(label);
    timedFunction(args);
    console.timeEnd(label);
}
/* decorator function example: it will be used in debouncing

function decorator(func) {
  return function (...args) {
    console.log("You are calling decorated function");
    func.call(this, ...args);
  };
}

function hello(name) {
  console.log("Hello", name);
}

const decoratedHello = decorator(hello);
decoratedHello("Yash Pandey");
*/

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    //this args extracted all arguments of above function, here in this case two things: func and delay
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
}

const myInput = document.getElementById("input-event");

function findSuggestions(e) {
  console.log(e.target.value);
}

const decoratedFindSuggestions = debounce(findSuggestions, 1000);

myInput.addEventListener("input", decoratedFindSuggestions);



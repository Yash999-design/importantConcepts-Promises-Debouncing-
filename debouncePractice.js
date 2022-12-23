function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
}

const myInput = document.getElementById("input-event");

function inputData(event) {
  console.log(event.target.value);
}

const decoratedFindSuggestions = debounce(inputData, 300);

myInput.addEventListener("input", decoratedFindSuggestions);

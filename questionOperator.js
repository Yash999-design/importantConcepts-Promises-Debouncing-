const weather = 35;
if (weather > 30) {
  let status = "Warm";
  console.log(status);
} else {
  let status = "Cold";
  console.log(status);
}

// OR

const weatherState = weather > 30 ? "Warm Weather" : "Cold Weather";
console.log(weatherState);

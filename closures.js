function closure() {
  for (var i = 1; i < 11; i++) {
    function hello(givenNumber) {
      setTimeout(() => {
        console.log(givenNumber);
      }, givenNumber * 1000);
    }
    hello(i);
  }
}

closure();

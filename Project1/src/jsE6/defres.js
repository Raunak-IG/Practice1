function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
   // will return 15


  console.log(myFunction(5))


  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let a = sum(4, 9, 16, 25, 29, 100, 66, 77);

  console.log(a);
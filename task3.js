function createCounter() {
  let count = 0;
  
  return function counter () {
    
    return count++
  }

}

// --------------------------
//Create Counter debug
// const counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());

// const counter2 = createCounter();
// console.log(counter2());

// console.log(counter1());
// ---------------------------

function hello () {
  console.log('hello friend')
}
function repeatFunction(func, times) {
  
  return function () {
    if (times < 0){
      while(1){
        func()
      }
    } else {
      for(let i = 0; i < times; i++){
        func()
      }
    }
  };
}

// ------------------------------
//repeat function debug
const repeaThrice = repeatFunction(hello,3);
repeaThrice();
const indefCall = repeatFunction(hello,-1);
indefCall();
// console.log(repeatFunction(hello,3))
// ------------------------------
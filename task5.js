// function addPlusOne(number) {
//   return number + 1;
// }

function lazyMap(array, func) {
  let index = 0;

  return {

    next: function () {
      if (index < array.length) {
        return {value: func(array[index++]), done: false};
      } else {
        return {done: true};
      }

    }
  }
}

// ------------------
//lazyMap debug
// const arrayNumbers = [1,3,5,7,9];
// const addOneInArray = lazyMap(arrayNumbers, (x => x + 1));

// let result = addOneInArray.next();
// while(result.done != true) {
//   console.log(result.value);
//   result = addOneInArray.next();
// }
// ------------------

function lazyFibb() {
  let start = 0;
  let next = 1;
  let aux = 0;
  let count = 0

  return {
    nextNumber: function () {
      if (count == 0) {
        count++;
        return 1

      } else {
        aux = next;
        next = next + start;
        start = aux;
        return next

      }
    }
  }
}

// ------------------
//lazy debug
// const generateFib = lazyFibb();
// console.log(generateFib.nextNumber());
// console.log(generateFib.nextNumber());
// console.log(generateFib.nextNumber());
// console.log(generateFib.nextNumber());
// console.log(generateFib.nextNumber());
//full name
const getFullName = person => person.firstName + ' ' + person.lastName;
// ----------------------
// debug getfullname
// console.log(getFullName({firstName: 'Vinicius', lastName: 'Souza'}));
// ----------------------

//unique words
const splitWords = text => text.split(' ')
const removeDuplicates = wordsArray => [...new Set(wordsArray)];
const sortArray = unsortedArray => unsortedArray.sort()
const filterUniqueWords = stringText => sortArray(removeDuplicates(splitWords(stringText)))

// ---------------------
// debug unique words
// console.log(filterUniqueWords('Hi I Am Vini Vini I Am'))
// ---------------------

//get average grades
const getAverage = grades => grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
const getGradesArray = students => students.map(student => {
  return student.grade
});
const getAverageGrade = students => getAverage(getGradesArray(students)); 

// ---------------------
// debug getAverageGrade
// const students = [{name: 'vini', grade: 10}, {name: 'sarah', grade: 5}, {name: 'john', grade: 10}];
// console.log(getAverageGrade(students))
// ---------------------


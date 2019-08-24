let instructor =  {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}
/*
  Object
  remove - O(1)
  access - O(1)
  add - O(1)
  find - O(n)
*/
// Object.values() O(n)
Object.keys(instructor) // O(n)
Object.entries(instructor) // O(n)
console.log(instructor.hasOwnProperty('firstName')) // O(1)

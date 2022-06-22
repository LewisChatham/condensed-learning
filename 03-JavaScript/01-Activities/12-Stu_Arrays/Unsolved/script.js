// WRITE YOUR CODE HERE
var studentNames = [`Ethan`, `Lewis`, `Matt`]

var firstStudent = studentNames[0]
console.log(studentNames)

console.log(`Welcome to the class ${studentNames[0]}`)
console.log(`Welcome to the class ${studentNames[1]}`)
console.log(`Welcome to the class ${studentNames[2]}`)

studentNames[0] = "john"

if (studentNames[0]!==firstStudent){
    console.log(`${studentNames[0]} is in class`)
}




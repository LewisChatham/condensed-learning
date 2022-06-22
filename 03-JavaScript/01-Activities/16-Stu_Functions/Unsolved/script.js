// Write Your Code Below
function compareValues(a,b) {
   if (a===b) {
    console.log(`they are equal in value and in type`)
   } else if(a==b) {
    console.log(`They are equal in value`)
   } else {
    console.log(`The values are not equal`)
   }
   
}

compareValues(10,`10`)
compareValues(10,10)
compareValues(2,`10`)
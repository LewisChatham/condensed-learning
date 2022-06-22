// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = true;
var expression2 = false;

// Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log(`True✅ True✅`)

} else if (expression1 && !expression2) {
    console.log(`true✅ False❌`)

} else if (!expression1 && expression2) {
    console.log(`False❌ True✅`)

} else {
    console.log(`False❌ False❌`)
}
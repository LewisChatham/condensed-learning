//WRITE YOUR CODE BELOW
var customerOrder = {

drinksName:`Tea`,
numberOfSugars: 2,
isReady: false

};

console.log(customerOrder.drinksName)
console.log(customerOrder.numberOfSugars)

if (customerOrder.isReady){
    console.log(`Ready for pick-up`)
} else {
    console.log(`Still in order queue`)
}
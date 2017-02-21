//var names = ['James', 'Jessica', 'Nigel', 'Margaret'];
////
////names.forEach(function(name) {
////    console.log('foreach', name);
////});
////
////names.forEach((name) => {
////    console.log('arrowFunc', name);
////});
////
////names.forEach((name) => console.log(name));
//
////var returnMe = (name) => name + '!';
////console.log(returnMe('James'));
//
//var person = {
//    name: 'James',
//    greet: function () {
//        names.forEach((name) => {
//            console.log(this.name + ' says hi to ' + name)
//        })
//    }
//}
//
//person.greet();

function add (a, b) {
    return a + b;
}

//Add statement

var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(4,7));

// Add expression

var addExpression = (a, b) => a + b;

console.log(addExpression(50,2));

console.log(add(1, 3));
console.log(add(9, 0));
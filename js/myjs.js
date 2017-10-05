/*var cheese = function(aLotofCheese) {
alert(aLotofCheese);
};

var swiss = function(number1, number2) {
	return number1 * number2;
};

cheese("The product is " + swiss(3,5) + "."); */


/*var remainder = function(divide) {
	alert(divide);
};

var blue = function(number1, number2) {
	return parseInt(number1 / number2);
};
remainder(blue(15,4));*/
//UI Logic
var inputtedAge = prompt('What is your age?');
var firstName = prompt('What is your first name');
var lastName = prompt('What is your last name');
var faveFood = prompt('What is your fave food?');

//Biz Logic
//var profile = function(userAnswers) {
//alert(userAnswers);
//};

var age = (inputtedAge);
//alert(age + 5);

var fullName = (firstName + "" + lastName);
//alert(fullName);
//var food = prompt('What is your favorite food?');
var food = (faveFood);

var response = function(blah1,oof1,eek1){
alert('Hello. I am ' + blah1 + 'years old. ' + oof1 + 'Favorite food is ' + eek1 + '.');
};
response(age,fullName,food);




//profile(userAnswers); 

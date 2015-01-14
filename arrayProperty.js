//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
String.prototype.reverseThis = function(s) {
	return s.split("").reverse().join("");
}
var newStr = new String('my name is');
newStr.reverse(newStr);
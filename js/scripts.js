var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var modulo = function(number1, number2) {
  return number1 % number2;
};
var warning = function(fn) {
  if (number1 === "") {
    alert("please input numbers only");
  }
  if (number2 === "") {
    alert("please input numbers only");
  }
};


$(document).ready(function() {
  var result, number1, number2;

  $("button#add").click(function() {
    warning();
    number1 = parseFloat($("#number1").val());
    number2 = parseFloat($("#number2").val());
    result = add(number1, number2);
    $("#output").append('<li>' + "The sum is: " + result + '</li>');
  });
  $("button#subtract").click(function() {
    warning();
    number1 = parseFloat($("#number1").val());
    number2 = parseFloat($("#number2").val());
    result = subtract(number1, number2);
    $("#output").append('<li>' + "The difference is: " + result + '</li>');
  });
  $("button#divide").click(function() {
    warning();
    number1 = parseFloat($("#number1").val());
    number2 = parseFloat($("#number2").val());
    result = divide(number1, number2);
    $("#output").append('<li>' + "The division is: " + result + '</li>');
  });
  $("button#multiply").click(function() {
    warning();
    number1 = parseFloat($("#number1").val());
    number2 = parseFloat($("#number2").val());
    result = multiply(number1, number2);
    $("#output").append('<li>' + "The product is: " + result + '</li>');
  });
  $("button#modulus").click(function() {
    warning();
    number1 = parseFloat($("#number1").val());
    number2 = parseFloat($("#number2").val());
    result = modulo(number1, number2);
    $("#output").append('<li>' + "The modulus is: " + result + '</li>');
  });
});

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
}

$(document).ready(function() {
  var result, number1, number2;

          $("button#add").click(function () {
            number1 = parseFloat($("#number1").val());
            number2 = parseFloat($("#number2").val());
            result = add(number1, number2);
            $("#output").text(result);
          });
          $("button#subtract").click(function () {
            number1 = parseFloat($("#number1").val());
            number2 = parseFloat($("#number2").val());
            result = subtract(number1, number2);
            $("#output").text(result);
          });
          $("button#divide").click(function () {
            number1 = parseFloat($("#number1").val());
            number2 = parseFloat($("#number2").val());
            result = divide(number1, number2);
            $("#output").text(result);
          });
          $("button#multiply").click(function () {
            number1 = parseFloat($("#number1").val());
            number2 = parseFloat($("#number2").val());
            result = multiply(number1, number2);
            $("#output").text(result);
          });
          $("button#modulus").click(function () {
            number1 = parseFloat($("#number1").val());
            number2 = parseFloat($("#number2").val());
            result = modulo(number1, number2);
            $("#output").text(result);
          });
    // $("form#compute").submit(function(event) {
    //     event.preventDefault();
    //     var number1 = parseFloat($("#number1").val());
    //     var number2 = parseFloat($("#number2").val());
    //     var result;
    //
    //
    //     // $("#output").text(result);
    //     // var number1 = parseFloat($("#number1").val());
    //     // var number2 = parseFloat($("#number2").val());
    //     // var result = subtract(number1, number2);
    //     // $("#output").text(result);
    //     //
    //     // var number1 = parseFloat($("#number1").val());
    //     // var number2 = parseFloat($("#number2").val());
    //     // var result = multiply(number1, number2);
    //     // $("#output").text(result);
    //     //
    //     // var number1 = parseFloat($("#number1").val());
    //     // var number2 = parseFloat($("#number2").val());
    //     // var result = modulo(number1, number2);
    //     // $("#output").text(result);
    //     //
    //     // var number1 = parseFloat($("#number1").val());
    //     // var number2 = parseFloat($("#number2").val());
    //     // var result = divide(number1, number2);
    //     $("#output").text(result);
    // });


});

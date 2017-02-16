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
    $("form#add").submit(function(event) {
        event.preventDefault();
        var number1 = parseFloat($("#add1").val());
        var number2 = parseFloat($("#add2").val());
        var result = add(number1, number2);
        $("#output").text(result);
    });
});

/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */
function calculateExpression(elementId) {
    var expression = document.getElementById(elementId).value;
    if(expression.length != 0) {
        document.getElementById(elementId).value = eval(expression);
        return;
    }
}

function cleanDisplay(elementId) {
    document.getElementById(elementId).value = "";
}

function clearLastChar(elementId) {
    var value = document.getElementById(elementId).value;
    document.getElementById(elementId).value = value.slice(0, value.length - 1);
}


function appendDigit(elementId, digit) {
    document.getElementById(elementId).value += digit;
}

function appendOperand(elementId, operand) {
    var currentExpression = document.getElementById(elementId).value;
    var lastChar = currentExpression.slice(-1);
    if(/(\.|-|\+|\*|\/)/.test(lastChar) || currentExpression.length == 0) {
        document.getElementById(elementId).value = currentExpression;
        return;
    }
    document.getElementById(elementId).value += operand;
}

function appendDot(elementId) {
    var currentExpression = document.getElementById(elementId).value;
    var tokens = currentExpression.split(/[-+*/]/);
    if(/(?=[.])/.test(tokens[tokens.length -1]) || currentExpression.length == 0) {
        document.getElementById(elementId).value = currentExpression;
        return;
    }
    document.getElementById(elementId).value += ".";
}


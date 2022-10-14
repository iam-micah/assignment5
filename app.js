function get_amicable() {
    var num1 = document.forms["form"]["num1"].value;
    var num2 = document.forms["form"]["num2"].value;

    var sum1 = 0;
    var sum2 = 0;

    const array1 = [];
    const array2 = [];

    for (let i = 0; i < num1; i++) {
        if (isAFactor(i, num1)) {
            array1.push(i);
            sum1 += i;
        }
    }

    for (let i = 1; i < num2; i++) {
        if (isAFactor(i, num2)) {
            array2.push(i);
            console.log(array2);
            sum2 += i;
        }
    }

    if (sum1 == num2) {

        if (sum2 == num1 || num1 == num2) {
            document.getElementById("output").innerHTML = "The numbers are amicable <br/>";
        } else {
            document.getElementById("output").innerHTML = "The numbers are not amicable <br/>";
        }
    } else {
        document.getElementById("output").innerHTML = "The numbers are not amicable <br/>";
    }
    document.getElementById("factor1").innerHTML = "The factors of " + num1 + " are " + array1 + ".<br/>";
    document.getElementById("factor2").innerHTML = "The factors of " + num2 + " are " + array2 + ".<br/>";
}

function isAFactor(x, y) {
    if (y % x == 0) {
        return true;
    } 
    return false;
}    
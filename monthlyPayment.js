var $ = function(id) {
    return document.getElementById(id);
};//$

var calculateMonthlyPayment = function() {
    var floatInitial = parseFloat($("initial_amount").value);
    var intMonths = parseInt($("months").value);
    var floatAnnualInterest = parseFloat($("annual_interest").value);
    
    floatAnnualInterest = floatAnnualInterest/100; //converts interest to a decimal
    
    var floatMonthlyInterest = floatAnnualInterest/12; //gets monthly interest from annual
    
    var floatMonthlyPayment = floatInitial * (floatMonthlyInterest/(1-Math.pow((1+floatMonthlyInterest),(-intMonths)))); //calculates monthly payment
    
    $("monthly_payment").value = "$" + floatMonthlyPayment.toFixed(2); //returns monthly payment rounded to 2 decimals
    
    return false;
    
};//calculateMonthlyPayment

window.onload = function () 
{
    $("initial_amount").focus;
    $("initial_amount").value = "";
    $("months").value = "";
    $("annual_interest").value = "";
    $("monthly_payment").value = "";
};//onload
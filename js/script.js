// Alert Name 
document.getElementById("name").onclick=function()
{
    document.getElementById("statement").innerHTML= null
    document.getElementById("output").innerHTML= null
    alert("Muhammad Ahsan Mushtaq")
}


// Alert Number 
document.getElementById("num").onclick=function()
{
    document.getElementById("statement").innerHTML= null
    document.getElementById("output").innerHTML= null
    alert("201707")
}


// Variables
document.getElementById("variable").onclick=function()
{
    document.getElementById("statement").innerHTML= null
    document.getElementById("output").innerHTML= null
    document.getElementById("output").style.textAlign="left"
    document.getElementById("output").innerHTML="<ul><li>A variable name can't contain spaces</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li> <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.</li><li>Capital letters are fine, but be careful. Variavle names are case sensitive. A rose is not a Rose. If you assign the string 'Floribandas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>";
}

//cammel case
document.getElementById("camelcase").onclick=function()
{
    document.getElementById("statement").innerHTML= null
    document.getElementById("output").innerHTML= null
    document.getElementById("output").innerHTML="myNameIsAhsanMushtaq"
}

// Sum of Two Numbers 
document.getElementById("sum1").onclick=function()
{
    document.getElementById("statement").innerHTML= null
    document.getElementById("output").innerHTML= null
    let num1= 20;
    let num2= 10;
    document.getElementById("statement").innerHTML="let num1 = "+num1+"<br>let num2 ="+num2+ "<br>Sum= " +num1+"+"+num2 ;
    document.getElementById("output").innerHTML=num1+num2;
}

// Subtract 2 Numbers 
document.getElementById("sub").onclick=function()
{
    document.getElementById("statement").innerHTML= null
    document.getElementById("output").innerHTML= null
    let num1= 20;
    let num2= 10;
    document.getElementById("statement").innerHTML="let num1 = "+num1+ "<br>let num2 = "+num2+ "<br> Answer=" +num1+"-"+num2;
    document.getElementById("output").innerHTML=num1-num2;
}

// Multiply 2  Numbers 
document.getElementById("mul").onclick=function()
{
    document.getElementById("statement").innerHTML= null
    document.getElementById("output").innerHTML= null
    let num1= 20;
    let num2= 10;
    document.getElementById("statement").innerHTML="let num1 = "+num1+ "<br>let num2 = "+num2+ "<br> Answer=" +num1+"x"+num2;
    document.getElementById("output").innerHTML=num1*num2;
}

// devide 2 numbers 
document.getElementById("divide").onclick=function()
{
    document.getElementById("statement").innerHTML= null
    document.getElementById("output").innerHTML= null
    let num1= 20;
    let num2= 10;
    document.getElementById("statement").innerHTML="let num1 = "+num1+ "<br>let num2 = "+num2+ "<br> Answer=" +num1+"/"+num2;
    document.getElementById("output").innerHTML=num1/num2;
}

//Calculate Equation
document.getElementById("equi").onclick=function()
{
    document.getElementById("statement").innerHTML= null
    document.getElementById("output").innerHTML= null
    let equ =  15 / 3 + 23 * 4 - (3 + 6)
    document.getElementById("statement").innerHTML="let equ =  28 / 2 + 5 * 15 - 4 (3 + 6) "
    document.getElementById("output").innerHTML= 28 / 2 + 5 * 15 - 4 / (3 + 6);
}

//clear buttons
document.getElementById("clearSat").onclick=function(){
    document.getElementById("statement").innerHTML= null
}
document.getElementById("clearOP").onclick=function(){
    document.getElementById("output").innerHTML= null
}

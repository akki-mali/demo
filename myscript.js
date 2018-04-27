
function addition()
{
    var a=Number(document.getElementById("1stnumber").value),
    b=Number(document.getElementById("2ndnumber").value);
 
    document.getElementById("result").innerHTML=a+b;
}

function subtraction()
{
   var a=Number(document.getElementById("1stnumber").value),
   b=Number(document.getElementById("2ndnumber").value);

   document.getElementById("result").innerHTML=a-b;
   
}
function multiply()
{
   var a=Number(document.getElementById("1stnumber").value),
   b=Number(document.getElementById("2ndnumber").value);

   document.getElementById("result").innerHTML=a*b;
   
}
function division()
{
   var a=Number(document.getElementById("1stnumber").value),
   b=Number(document.getElementById("2ndnumber").value);
    if(a>b)
    {
    document.getElementById("result").innerHTML=a/b;
    }
    else
    {
     document.getElementById("result").innerHTML=b/a;
    }  
}

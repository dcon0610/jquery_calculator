$(document).ready(function() {
var calculation=[]

result.innerHTML="This is your fabulous result"
var operation=""



i=0

$('#button-0').click(userInput)
$('#button-1').click(userInput)
$('#button-2').click(userInput)
$('#button-3').click(userInput)
$('#button-4').click(userInput)
$('#button-5').click(userInput)
$('#button-6').click(userInput)
$('#button-7').click(userInput)
$('#button-8').click(userInput)
$('#button-9').click(userInput)

$('#button-plus').click(equation)
$('#button-multiply').click(equation)
$('#button-minus').click(equation)
$('#button-divide').click(equation)
$('#button-power').click(equation)
$('#button-equal').click(equals)
$('#button-clear').click(clear)



// Your code here...
function userInput(){
if (calculation[i]===undefined)
calculation[i]=this.value
else
calculation[i]= calculation[i].concat(this.value)
console.log(calculation[i])

console.log()

if(i>1) {

    equals()
}

}

function equation(){
operation=this.value
console.log(this.value)
i++

console.log(calculation)

}



function equals(){
    if (operation==="-"){
    
        result.innerHTML=parseInt(calculation[i-1]) - parseInt(calculation[i])
    } 
    else if (operation==="+") {

        result.innerHTML=parseInt(calculation[i-1]) + parseInt(calculation[i])
    } 
    else if (operation==="*") {

        result.innerHTML=parseInt(calculation[i-1]) * parseInt(calculation[i])
    }
    else if (operation==="/") {

        result.innerHTML=parseInt(calculation[i-1]) / parseInt(calculation[i])
    }
    else if (operation==="^") {

        result.innerHTML= Math.pow(calculation[i-1],calculation[i])
    }

temporaryResult=result.innerHTML

}

function clear(){
    operation=""
    calculation=["","","","","",""];

    result.innerHTML="This is your fabulous result"

}


});

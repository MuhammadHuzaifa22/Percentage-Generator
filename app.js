var chemmarks = document.querySelector('#chem-marks') ;
var phymarks = document.querySelector('#phy-marks');
var mathmarks = document.querySelector('#math-marks');
var commarks = document.querySelector('#com-marks');
var studenttotal =document.querySelector('#total-marks');
var percentage = document.querySelector('#percentage');
var grade = document.querySelector('#grade');

function calculatePercentage(){
    console.log(chemmarks.value);
    console.log(phymarks.value);
    console.log(mathmarks.value);
    console.log(commarks.value);
    var obtainedmarks = + +chemmarks.value + +phymarks.value + +mathmarks.value + +commarks.value;
    console.log("obtainedmarks : " +obtainedmarks);
    var totalmarks = 400;
    studenttotal.innerHTML = obtainedmarks;
    var studentPercentage = obtainedmarks / totalmarks * 100;
    percentage.innerHTML = studentPercentage;
    if(studentPercentage >= 80){
        grade.innerHTML = 'A+'
       
    }else if(studentPercentage >= 70){
        grade.innerHTML = 'A'
      
    }else if(studentPercentage >= 50){
        grade.innerHTML = 'B'
        
    }else{
        grade.innerHTML = 'FAIL'

    }
}

// Pushing it
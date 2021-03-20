function pageLoad(){
    document.getElementById("butBmi").onclick =bmiCalculation;
    document.getElementById("clear").onclick = clear;
    document.getElementById("del").onclick = delInfo;
    document.getElementById("butDescription").onclick= report;
    
   
    
}

function bmiCalculation(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    let bmiVal = Math.round(weight / Math.pow(height,2));
    displayResult(bmiVal);
    

}
function clear(){
    
    document.getElementById("height").value =NaN;
    document.getElementById("weight").value =NaN;
    document.getElementById("spanResult").innerHTML="";
    document.getElementById("report").innerHTML="";
}
function delInfo(){
    document.getElementById("fname").value ="";
    document.getElementById("lname").value ="";
}


function displayResult(val){
   let resultBmi= document.getElementById("spanResult");
   resultBmi.innerHTML = val;
   if(val < 18.5){
   resultBmi.className="yellow";
   } else if(val < 24.9){
    resultBmi.className="green";
   } else if(val < 29.9){
   resultBmi.className="orange";
   } else {
       resultBmi.className="red";
   }
   }
//    function colorYellow(){
//     let resultBmi= document.getElementById("spanResult");
//     resultBmi.className="yellow";
    

    function report(){
        if(validate()){
        let val= document.getElementById("spanResult").innerHTML;
        let firstName = document.getElementById("fname").value;
        let lastName = document.getElementById("lname").value;
       let spanReport= document.getElementById("report");
       spanReport.innerHTML = "Name :- " + firstName.toUpperCase() + " " + lastName.toUpperCase()  +"<br>"+ categories(val) ;
        
       function categories(val){
           let cat =  "BMI Category:- "
        if(val < 18.5){
            cat +=  "Underweight." +"<br>" + "BMI value range:- Less than 18.5.";
            spanReport.className="yellow";
            return cat;
        } else if(val < 24.9){
            cat += "Healthyweight."+"<br>" + "BMI Value range:- 18.5 to 24.9.";
            spanReport.className="green";
            return cat;
        } else if(val < 29.9){
           cat += "Overweight." +"<br>" + "BMI value range:- 25 to 29.9. ";
           spanReport.className="orange";
           return cat;
        } else {
            cat +="Obese." +"<br>" + "BMI value range:- 30 or greater.";
            spanReport.className="red";
            return cat;
        
        }
    }
    }
        
    }

    function validate(){
        let fname=document.getElementById("fname");
        let lname= document.getElementById("lname");
        if(fname.value === "" || lname.value ===""){
            alert("Personal Information Missing !")
            return false;
        }
        return true;
    }
    
    

   

   




window.onload =pageLoad;
/**
 * BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
 */
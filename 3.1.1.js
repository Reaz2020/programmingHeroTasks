//*** there are three diffrent ways of adding event listiner i have learned i have mostly used one but other as well */

//3.1.1    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects  INBULIT J QUERRY OBJECT
var st = "Interest form"; 
document.getElementById("intro").innerHTML =st;// String writing
//3.1.1 age calc
document.getElementById("ageButton").addEventListener("click", ageCalc) ;
function ageCalc(){
    
    // date , math 
    var oneYearsMiliseconeds=31536000000;
    var dateOfbirth = document.getElementById("DOB").value; 
    var userInput= new Date(dateOfbirth); // USE OF DATE 
    var mon_diff = Date.now() - userInput.getTime(); 
    var age_date = new Date(mon_diff); 
    age=age_date/oneYearsMiliseconeds;
    age = Math.round(age);  // USE OF MATH
    let tim = document.getElementById("age");
    tim.innerHTML =  " your age is  :  " +" "+age;
 
}

//this validate() method used underneath, is learned from , https://html.form.guide/snippets/javascript-form-validation-using-regular-expression/ 

// 3.1.1  ARRAY ,BOOLEAN , NUMBER  , STRING,  RegExp


document.addEventListener('DOMContentLoaded', function () {
  var myForm = document.getElementById('myForm');
  var myArray = []; 

  myForm.addEventListener('submit', function () { 
   
    isFormValid = validate(); 
    if (isFormValid) {
     
      myForm.submit(); 
      
    }
   
  });

  function validate() {
    let name = document.getElementById('name').value;
    var phNumber = document.getElementById('ph-number').value;
    var postCode = document.getElementById('post-code').value;

    var nameRGEX = /^[A-Za-z\s]*$/;
    var phRGEX = /^\d+$/;
    var postRGEX = /^\d+$/;

    var nameAfterValidation = nameRGEX.test(name);
    var phAfterValidation = phRGEX.test(phNumber);
    var postalAfterValidation = postRGEX.test(postCode);
    

    let doesntMatch = false;

    if (nameAfterValidation  == doesntMatch) {
      alert('Name is invalid');
      return false;
      
    }

   

    if (phAfterValidation  == doesntMatch) {
      alert('Phone number is invalid');
      return false;
    }

    if (postalAfterValidation== doesntMatch) {
      alert('Post code is invalid');
      return false;
    }


    myArray.push(name);
    myArray.push(postCode);
    myArray.push(phNumber);
   
   
  }
});

//3.1.1 array


var myArray2 = [];

document.addEventListener('DOMContentLoaded', function () {
  var arrayButton = document.getElementById('arrayButton');
  var detailsDiv = document.getElementById('details');

  arrayButton.addEventListener('click', function () {
    displayArray();
  });

  function displayArray() {
    var display = myArray2.join(', ');
    myArray2.push('Cueent members: - Nancy 29');
    myArray2.push('Alan 21');
    myArray2.push('ziko 27');
    myArray2.push('nina 34 //');
    detailsDiv.innerHTML= display;
  }
});



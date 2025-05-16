const form=document.querySelector('form')
//this usecase will give you empty
//const height=  parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
    e.preventDefault();
  const height=  parseInt(document.querySelector('#height').value);
  const weight=  parseInt(document.querySelector('#weight').value);
  const results= document.querySelector('#results');

  if(height ==='' || height < 0 || isNaN(height)){
    results.innerHTML="please give a valid height"
  }else if(weight ==='' || weight < 0 || isNaN(weight)){
    results.innerHTML="please give a valid weight"
  }
  else{
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    //show the result
    results.innerHTML=`<span>Your BMI is: ${bmi}</span>`
  }
 let message = "";

    const bmiValue = parseFloat(bmi); // ensure it's a number

    if (bmiValue < 18.6) {
     document.write("You are underweight")
    } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
      document.write("Your weight is normal")
    } else {
       document.write("You are overweight")

    msg.textContent = message;
    }
  })

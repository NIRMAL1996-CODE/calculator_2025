
const buttons= document.querySelectorAll(".box");
const display=document.querySelector("#display");

buttons.forEach(button =>{
  button.addEventListener("click",()=> {
  let buttonText = button.innerText;//get the txt on button

  if(buttonText==="C"){
      display.value= "";//if "C is clicked, clear the display"
  }
  else if( buttonText==="="){
    try
      {
        display.value= eval(display.value);// Evaluate expression
      } 
    catch (e) 
    {
      display.value = "Error"; // Handle invalid expressions
    }
  }
  else
  {
      display.value += buttonText; 
  }
});
});

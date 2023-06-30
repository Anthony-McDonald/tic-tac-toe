const firebutton = document.querySelector('.fire');
const waterbutton = document.querySelector('.water');

firebutton.addEventListener("click", function() {
    alert("fire");
    styleDisplaySwitcher(".sidebox", ".gamewindow")
    
  });

waterbutton.addEventListener("click", function() {
   alert("water");
   styleDisplaySwitcher(".sidebox", ".gamewindow")
 }); 


 function styleDisplaySwitcher(toSwitch, switchTo) {
    const elementToSwitch = document.querySelector(toSwitch);
    const elementToSwitchTo = document.querySelector(switchTo);

    let elementDisplay = window.getComputedStyle(elementToSwitch).display;
    
    if (elementDisplay == "flex") {
        elementToSwitch.style.display = "none";
        elementToSwitchTo.style.display = "flex"
    } else {
        elementToSwitch.style.display = "flex"
        elementToSwitchTo.style.display = "none"
    }
    console.log(typeof toOut)
 }
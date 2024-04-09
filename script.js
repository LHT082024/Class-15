
const submittValue = document.querySelector("#submittValue");
console.log(submittValue);

submittValue.addEventListener("click", () => {
    const inputValue = document.querySelector("#inputValue").value;
    console.log(inputValue);

    const displayValue = document.querySelector("#displayValue");
    console.log(displayValue);
    
    displayValue.textContent = inputValue;
}); 


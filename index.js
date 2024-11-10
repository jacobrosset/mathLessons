console.log(Math.E);
console.log(Math.PI);

const diameterElement = document.getElementById("diameter");
const circumferenceElement = document.getElementById("circumference");


document.getElementById("calculator").onclick = function(){
    const diameter = Number(diameterElement.value);

    if(isNaN(diameter) || diameter<=0){
        circumferenceElement.textContent = "Please enter a valid positive number for the diameter";
    } else {
        const circumference = Math.PI * diameter;
        circumferenceElement.textContent =`For a circle with diameter of ${diameter}, the circumference: ${circumference}`;
    }

};



function calculateBmi() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const results = document.querySelector('.results');
    let bmiValue = weight / (height * height / 10000);
    bmiValue = bmiValue.toFixed(2);

    if (bmiValue > 0 && bmiValue < 18.5) {
        results.textContent = "Your BMI is " + bmiValue + " hence you are Underweight!";
    }
    else if (bmiValue > 18.5 && bmiValue < 25) {
        results.textContent = "Your BMI is " + bmiValue + " hence you have a Healthy weight:)";
    }
    else if (bmiValue > 25 && bmiValue < 30) {
        results.textContent = "Your BMI is " + bmiValue + " hence you are overweight but not obese!";
    }
    else if (bmiValue >= 30 && bmiValue < 35 ){
        results.textContent = "Your BMI is " + bmiValue + " hence you are Obese class I!";
    }
    else if (bmiValue >= 35 && bmiValue < 40 ){
        results.textContent = "Your BMI is " + bmiValue + " hence you are Obese class II!";
    }
    else if (isNaN(weight) || isNaN(height)) {
        alert("Please enter number values only!")
        window.location.reload();
    }
    else {
        alert("Please key in valid numbers!")
        window.location.reload();
    }
}

function resetPage() {
    window.location.reload();
}




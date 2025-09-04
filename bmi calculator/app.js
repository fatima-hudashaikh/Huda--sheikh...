function calculateBMI() {
    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value
    var showResult = document.getElementById("showResult")

    if (weight == "" || height == "") {
        alert("All Field are Required")
        return
    }

    var bmi = weight / (height * height)
    var result = bmi.toFixed(1)
    console.log(result)

    showResult.innerHTML = "Your Bmi is:" + result

    if (result < 18.5) {
        showResult.innerHTML = "underweight" + result
        showResult.style.color = "Green"
    }

    else if (result > 18.5 && result < 25.9) {
        showResult.innerHTML = "Healthy Weight:" + result
        showResult.style.color = "Red"
    }

    else if (result > 25.9 && result < 29.9) {
        showResult.innerHTML = "Over Weight :" + result
    }
}
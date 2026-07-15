function validateForm() {

    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;
    var blood = document.getElementById("blood").value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    // Check if any field is empty
    if (name == "" || mobile == "" || dob == "" || blood == "" || age == "" || height == "" || weight == "") {
        alert("Please fill up all the fields.");
        return false;
    }

    // Mobile number must be 11 digits
    if (mobile.length != 11) {
        alert("Mobile number must be 11 digits.");
        return false;
    }

    // Mobile number should contain only numbers
    if (isNaN(mobile)) {
        alert("Mobile number should contain only numbers.");
        return false;
    }

    // Age check
    if (age <= 0) {
        alert("Enter a valid age.");
        return false;
    }

    // Height check
    if (height <= 0) {
        alert("Enter a valid height.");
        return false;
    }

    // Weight check
    if (weight <= 0) {
        alert("Enter a valid weight.");
        return false;
    }

    alert("Login Successful!");

    return true;
}
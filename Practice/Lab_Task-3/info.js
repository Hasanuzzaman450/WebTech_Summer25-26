<script>

function handlesubmit()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var blood = document.getElementById("blood").value;
    var dob = document.getElementById("dob").value;
    var message = document.getElementById("message").value;

    if(name == "")
    {
        document.getElementById("error").innerHTML = "Please enter your name.";
        return false;
    }

    if(email == "")
    {
        document.getElementById("error").innerHTML = "Please enter your email.";
        return false;
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1)
    {
        document.getElementById("error").innerHTML = "Invalid email.";
        return false;
    }

    if(mobile == "")
    {
        document.getElementById("error").innerHTML = "Please enter mobile number.";
        return false;
    }

    if(mobile.length != 11 || isNaN(mobile))
    {
        document.getElementById("error").innerHTML = "Mobile number must be 11 digits.";
        return false;
    }

    if(blood == "")
    {
        document.getElementById("error").innerHTML = "Select your blood group.";
        return false;
    }

    if(dob == "")
    {
        document.getElementById("error").innerHTML = "Select your date of birth.";
        return false;
    }

    if(message == "")
    {
        document.getElementById("error").innerHTML = "Please enter your message.";
        return false;
    }

    if(message.length < 10)
    {
        document.getElementById("error").innerHTML = "Message must be at least 10 characters.";
        return false;
    }

    document.getElementById("error").innerHTML = "";

    alert("Information Submitted Successfully\n\n" +
          "Name: " + name + "\n" +
          "Email: " + email + "\n" +
          "Mobile: " + mobile + "\n" +
          "Blood Group: " + blood + "\n" +
          "Date of Birth: " + dob + "\n" +
          "Message: " + message);

    return false;
}

</script>
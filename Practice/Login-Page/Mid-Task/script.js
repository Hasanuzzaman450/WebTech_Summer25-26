
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "Light Mode";
    }
    else{
        themeBtn.innerHTML = "Dark Mode";
    }

});


document.getElementById("about").style.display = "none";
document.getElementById("contact").style.display = "none";



document.querySelector(".about-lnk").addEventListener("click", function() {
    document.getElementById("contact").style.display = "none";
    document.querySelector("#about").style.display = "block";

    document.getElementById("home").style.display = "none";

});

document.querySelector(".con-lnk").addEventListener("click", function() {
    document.getElementById("about").style.display = "none";
    document.querySelector("#contact").style.display = "block";

    document.getElementById("home").style.display = "none";

});
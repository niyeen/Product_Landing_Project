document.addEventListener("DOMContentLoaded", function() {

  alert("Welcome to my product page!");

  document.getElementById("buyBtn").onclick = function() {
    alert("Thanks for clicking!");
  };

  document.getElementById("colorBtn").onclick = function() {
    document.body.style.backgroundColor = "lightgreen";
  };

});

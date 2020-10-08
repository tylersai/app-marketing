var btnMonthly = document.getElementById("btn-monthly");
var btnYearly = document.getElementById("btn-yearly");
var cardMonthly = document.getElementById("card-monthly");
var cardYearly = document.getElementById("card-yearly");

function swapPriceCard(event) {
  event.preventDefault();
  if (!event.target.classList.contains("selected")) {
    event.target.classList.add("selected");
    if (event.target == btnMonthly) {
      btnYearly.classList.remove("selected");
      cardMonthly.style.transform = "translate(0,0)";
      cardYearly.style.transform = "translate(12vw, 40px)";
      setTimeout(() => {
        cardMonthly.style.zIndex = 2;
        cardYearly.style.zIndex = 1;
      }, 100);
    } else {
      btnMonthly.classList.remove("selected");
      cardYearly.style.transform = "translate(0,0)";
      cardMonthly.style.transform = "translate(12vw, 40px)";
      setTimeout(() => {
        cardYearly.style.zIndex = 2;
        cardMonthly.style.zIndex = 1;
      }, 100);
    }
  }
}

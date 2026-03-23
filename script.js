console.log('Hello!');

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropbtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.closest(".dropdown").classList.toggle("open");
    });
  });
});

// User gets to the bottom
window.onscroll = () => {
  if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)
    console.log("You are at the end of the page.")


}


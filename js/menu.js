
    let hamburger = document.getElementById("hamburger");
  
    let nav = document.querySelector("nav");

    let page = document.querySelector("body")
  
  function cross() {
    hamburger.classList.toggle("change");
    nav.classList.toggle("hidden");
    console.log("thanks");
  };

  function menuoff() {
// hamburger.classList.remove("change");
nav.classList.add("hidden");
  };

  hamburger.addEventListener("click", cross);

  page.addEventListener("click", menuoff);
  
  
  
// shows and hides the hidden nav, and crosses and uncrosses hamburger lines with its state 
    
    
    let hamburger = document.getElementById("hamburger");
  
    let nav = document.querySelector("nav");

    let page = document.querySelector("main");

    // let page2 = document.querySelector("section");
  
  function cross() {
    hamburger.classList.toggle("change");
    nav.classList.toggle("hidden");
    console.log("thanks");
  };

  function menuoff() {
  hamburger.classList.remove("change");
  nav.classList.add("hidden");
  console.log("cancelled");
  };

  hamburger.addEventListener("click", cross);

  page.addEventListener("click", menuoff);
  
  // page2.addEventListener("click", menuoff);
  
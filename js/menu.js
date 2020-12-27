// shows and hides the hidden nav, and crosses and uncrosses hamburger lines with its state 
    
    
    let hamburger = document.getElementById("hamburger");
  
    let nav = document.querySelector("nav");

    let page = document.querySelector("main");

    // let body = document.querySelector("body");

    let foot = document.querySelector("footer")

    // let page2 = document.querySelector("section");
  
  function cross() {
    hamburger.classList.toggle("change");
    hamburger.classList.toggle("animation");
    nav.classList.toggle("hidden");
    page.classList.add("transparency");
    nav.classList.add("opaque");

    console.log("thanks");
  };

  function menuoff() {
  hamburger.classList.remove("change");
  nav.classList.add("hidden");
  console.log("cancelled");
  page.classList.remove("transparency");
  };

  page.addEventListener("click", menuoff);

  hamburger.addEventListener("click", cross);

  footer.addEventListener("click", menuoff)

  
  
  // page2.addEventListener("click", menuoff);
  
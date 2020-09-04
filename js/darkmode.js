function darkmode() {
    var today = new Date();
    var time = today.getHours();
    // let clock = document.querySelector("nav");
    let bod = document.querySelector("body");
    let hed = document.querySelector("header");
    let navcon = document.getElementById("hamburger");
    let mainnav = document.getElementById("mainNav");
    let bar1 = document.getElementById("bar1");
    let bar2 = document.getElementById("bar2");
    let bar3 = document.getElementById("bar3");
    let followAd = document.getElementById("follow");
    let logo = document.getElementById("logo");
    let twitpic = document.getElementById("twitch");
    let insta = document.getElementById("insta");
    let youtube = document.getElementById("youtube");
    let fbook = document.getElementById("fbook");
    let twitter = document.getElementById("twitter");
    let soundcloud = document.getElementById("soundcloud");
    let footie = document.querySelector("footer");

    let h1span = document.querySelector("#blogtitle");
    
    
    // clock.innerHTML = time;
    
    if (time > 19 || time < 7) {


      bod.classList.add("dark-theme");
      bod.classList.remove("light-theme");
      hed.classList.add("header-darkmode");
      navcon.classList.add("container-darkmode");
      mainnav.classList.add("dark-nav-theme");
      bar1.classList.add("bar-darkmode");
      bar2.classList.add("bar-darkmode");
      bar3.classList.add("bar-darkmode");
      logo.classList.add("logo-darkmode");
      followAd.classList.add("followAd-darkmode");
      twitpic.classList.add("twitch-darkmode");
      insta.classList.add("insta-darkmode");
      youtube.classList.add("youtube-darkmode");
      fbook.classList.add("fbook-darkmode");
      twitter.classList.add("twitter-darkmode");
      soundcloud.classList.add("soundcloud-darkmode");
      footie.classList.add("main-darkmode");

      var x = document.querySelectorAll("p, h4");
        var i;

        var b = document.querySelectorAll(".blogpost");
        var y;

      for (i = 0; i < x.length; i++) {
        x[i].style.color = "#EEE";
      }

      for (y = 0; y < b.length; y++) {
        b[y].style.backgroundColor = "#323232";
      }

      h1span.classList.add("blogtitle-darkmode");
    }
    else {
      bod.classList.remove("dark-theme");
      bod.classList.add("light-theme");
      hed.classList.remove("header-darkmode");
      navcon.classList.remove("container-darkmode");
      bar1.classList.remove("bar-darkmode");
      bar2.classList.remove("bar-darkmode");
      bar3.classList.remove("bar-darkmode");
      logo.classList.remove("logo-darkmode");
      followAd.classList.remove("followAd-darkmode");
      twitpic.classList.remove("twitch-darkmode");
      insta.classList.remove("insta-darkmode");
      youtube.classList.remove("youtube-darkmode");
      fbook.classList.remove("fbook-darkmode");
      twitter.classList.remove("twitter-darkmode");
      soundcloud.classList.remove("soundcloud-darkmode");
      footie.classList.remove("main-darkmode");

      for (i = 0; i < x.length; i++) {
        x[i].style.color = "#111";
      }
      for (c = 0; c < z.length; c++) {
        z[c].style.color = "#111";
      }

      h1span.classList.remove("blogtitle-darkmode");
    }  
  };
  
  darkmode();
function darkmode() {
    var today = new Date();
    var time = today.getHours();
    let bod = document.querySelector("body");
    let h1span = document.querySelector("#blogtitle");
    // let hed = document.querySelector("header");
    let navcon = document.getElementById("hamburger");
    let mainnav = document.getElementById("mainNav");
    let bar1 = document.getElementById("bar1");
    let bar2 = document.getElementById("bar2");
    let bar3 = document.getElementById("bar3");
    let followAd = document.getElementById("follow");
    // let logo = document.getElementById("logo");
    let twitpic = document.getElementById("twitch");
    let insta = document.getElementById("insta");
    let youtube = document.getElementById("youtube");
    let fbook = document.getElementById("fbook");
    let twitter = document.getElementById("twitter");
    let soundcloud = document.getElementById("soundcloud");
    let footie = document.querySelector("footer");
    let hero = document.getElementById("hero");
    let bumper = document.getElementById("bumper")
    
    // let title = document.getElementById("title");
    
    if (time > 19 || time < 7) {


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
    

      bod.classList.add("dark-theme");

      bod.classList.remove("light-theme");

    //   hed.classList.add("header-darkmode");

      navcon.classList.add("container-darkmode");

      mainnav.classList.add("dark-nav-theme");

      bar1.classList.add("bar-darkmode");

      bar2.classList.add("bar-darkmode");

      bar3.classList.add("bar-darkmode");

    //   logo.classList.add("logo-darkmode");

      followAd.classList.add("followAd-darkmode");

      twitpic.classList.add("twitch-darkmode");

      insta.classList.add("insta-darkmode");

      youtube.classList.add("youtube-darkmode");

      fbook.classList.add("fbook-darkmode");

      twitter.classList.add("twitter-darkmode");

      soundcloud.classList.add("soundcloud-darkmode");

      footie.classList.add("main-darkmode");

      h1span.classList.add("blogtitle-darkmode");

      hero.src = "images/FrontPageDarkText.png";

    }
    else {

      bod.classList.remove("dark-theme");
      bod.classList.add("light-theme");
      navcon.classList.remove("container-darkmode");
      bar1.classList.remove("bar-darkmode");
      bar2.classList.remove("bar-darkmode");
      bar3.classList.remove("bar-darkmode");
      followAd.classList.remove("followAd-darkmode");
      twitpic.classList.remove("twitch-darkmode");
      twitpic.classList.add("twitch-lightmode")
      insta.classList.remove("insta-darkmode");
      insta.classList.add("insta-lightmode");
      youtube.classList.remove("youtube-darkmode");
      youtube.classList.add("youtube-lightmode")
      fbook.classList.remove("fbook-darkmode");
      fbook.classList.add("fbook-lightmode")
      twitter.classList.remove("twitter-darkmode");
      twitter.classList.add("twitter-lightmode");
      soundcloud.classList.remove("soundcloud-darkmode");
      soundcloud.classList.add("soundcloud-lightmode")
      footie.classList.remove("main-darkmode");
      footie.classList.add("main-lightmode");
    

      var x = document.querySelectorAll("p, h4");
        var i;

        var b = document.querySelectorAll(".blogpost");
        var y;

      for (i = 0; i < x.length; i++) {
        x[i].style.color = "#111";
      }
      for (y = 0; y < b.length; y++) {
        b[y].style.backgroundColor = "#ABABAB44";
      }

      h1span.classList.remove("blogtitle-darkmode");

      hero.src = "images/FrontPageLiteText.png";

  
    }  
  };
  
  darkmode();
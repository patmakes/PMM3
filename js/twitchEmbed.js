let twitchcontainer = document.getElementById("twitchcont");

var embed = new Twitch.Embed("twitch-embed", {
    width: 854,
    height: 480,
    channel: "patmakesmusic",
    layout: "video",
    autoplay: false,
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: String["pages.git.generalassemb.ly/patmakes/patMakesMusic/index.html"]
  });

  embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
      console.log('video ready')

      var player = embed.getPlayer();

        player.play();

  });

  function ShowHide() {

        var stream = embed.getEnded();

        console.log(getEnded());

    if ((Twitch.Player.OFFLINE)) {
        twitchcontainer.classList.add("hidden");
        console.log("hide");
    }
    else {
        twitchcontainer.classList.remove("hidden")
        console.log("show");
    };

    ShowHide();

  }


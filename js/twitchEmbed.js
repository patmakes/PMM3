let twitchcontainer = document.getElementById("twitchcont");

let twitchEmbed = document.getElementById("twitch-embed");

var embed = new Twitch.Embed("twitch-embed", {
    width: "100%",
    height: "414",
    channel: "patmakesmusic",
    layout: "video",
    autoplay: false,
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: String["https://www.patmakesmusic.com/live.html","https://patmakes.github.io/PMM3/live.html"]
  });

  embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
      console.log('video ready')

      var player = embed.getPlayer();

        // player.play();

  });

  embed.addEventListener(Twitch.Embed.OFFLINE, function() {
    twitchcontainer.innerHTML = "Be back soon!";
    twitchcontainer.classList.add("twitchcontHidden")
    twitchEmbed.classList.add("hidden");
    console.log("hide");
  });

  embed.addEventListener(Twitch.Embed.ONLINE, function() {
    twitchcontainer.classList.remove("twitchcontHidden")
    twitchEmbed.classList.remove("hidden");
    console.log("show");
    twitchcontainer.innerHTML = "";
  });

 

  var streamstatus = embed.getEnded();

  let cond = streamstatus.valueOf();

  console.log(streamstatus.valueOf());

  function ShowHide() {
  };


// else {
//   twitchcontainer.classList.remove("hidden");
//   twitchEmbed.classList.remove("hidden");
//   console.log("show");

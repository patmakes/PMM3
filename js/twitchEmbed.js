let twitchcontainer = document.getElementById("twitchcont");

let twitchEmbed = document.getElementById("twitch-embed");

var embed = new Twitch.Embed("twitch-embed", {
    width: 350,
    height: 197,
    channel: "patmakesmusic",
    layout: "video",
    autoplay: false,
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: String["pages.git.generalassemb.ly/patmakes/patMakesMusic/index.html"]
  });

  embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
      console.log('video ready')

      var player = embed.getPlayer();

        // player.play();

  });

  embed.addEventListener(Twitch.Embed.OFFLINE, function() {
    twitchcontainer.classList.add("hidden");
    twitchEmbed.classList.add("hidden");
    console.log("hide");
  });

  embed.addEventListener(Twitch.Embed.ONLINE, function() {
    twitchcontainer.classList.remove("hidden");
    twitchEmbed.classList.remove("hidden");
    console.log("show");
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

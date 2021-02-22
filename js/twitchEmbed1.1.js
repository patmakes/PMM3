let twitchcontainer = document.getElementById("twitchcont");

// let twitchEmbed = document.getElementById("twitch-embed");

var options = {
    width: "100%",
    height: "414",
    channel: "patmakesmusic",
    layout: "video",
    autoplay: false,
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: String["https://www.patmakesmusic.com/index.html","https://patmakes.github.io/PMM3/index.html"]};

  var player = new Twitch.Player("twitch-embed", options);
  player.setVolume(0.5)

//   embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
//       console.log('video ready')

//     //   var player = embed.getPlayer();

//         // player.play();

//   });

  player.addEventListener(Twitch.Player.OFFLINE, function() {
    twitchcontainer.innerHTML = "Live again soon!";
    twitchcontainer.classList.add("twitchcontHidden")
    player.classList.add("hidden");
    console.log("hide");
  });

  embed.addEventListener(Twitch.Player.ONLINE, function() {
    twitchcontainer.classList.remove("twitchcontHidden")
    player.classList.remove("hidden");
    console.log("show");
    twitchcontainer.innerHTML = "";
  });

 

  // var streamstatus = embed.getEnded();

  // let cond = streamstatus.valueOf();

  // console.log(streamstatus.valueOf());

  // function ShowHide() {
  // };


// else {
//   twitchcontainer.classList.remove("hidden");
//   twitchEmbed.classList.remove("hidden");
//   console.log("show");

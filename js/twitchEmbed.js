var embed = new Twitch.Embed("twitch-embed", {
    width: 854,
    height: 480,
    channel: "patmakesmusic",
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: ["pages.git.generalassemb.ly/patmakes/patMakesMusic/index.html"]
  });

  embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
      console.log('video ready')
  })
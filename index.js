const players = Plyr.setup("video");
window.players = players;

(function () {
  var video = document.querySelector("#lake");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/lake/lake.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#sheep");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/sheep/sheep.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#cow");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/cow/cow.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#skyscraper");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(
      "https://media-gallery.vercel.app/hls/skyscraper/skyscraper.m3u8"
    );
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#disc");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/disc/disc.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#puppies");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/puppies/puppies.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#waves");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/waves/waves.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#koala");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/koala/koala.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#fountain");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(
      "https://media-gallery.vercel.app/hls/fountain/fountain.m3u8"
    );
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#lemon");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/lemon/lemon.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#ink");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/ink/ink.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#dolby");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/dolby/dolby.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#meditation");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(
      "https://media-gallery.vercel.app/hls/meditation/meditation.m3u8"
    );
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#retro");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/retro/retro.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#river");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://media-gallery.vercel.app/hls/river/river.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#tearsofsteel");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
(function () {
  var video = document.querySelector("#bunny");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();


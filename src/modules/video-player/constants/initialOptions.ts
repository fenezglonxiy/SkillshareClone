const initialOptions = {
  autoplay: false,
  controls: true,
  textTrackSettings: false,
  responsive: true,
  breakpoints: {
    small: 300,
    medium: 550,
  },
  sources: [
    {
      src: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
      type: "application/dash+xml",
    },
  ],
  children: [
    "MediaLoader",
    "PosterImage",
    "TextTrackDisplay",
    "LoadingSpinner",
    "SSBigPlayToggle",
    "SSCloseButton",
    "LiveTracker",
    "SSControlBar",
    "ErrorDisplay",
    "TextTrackSettings",
    "ResizeManager",
  ],
  playbackRates: [2, 1.5, 1.25, 1],
  html5: {
    vhs: {
      overrideNative: true,
      limitRenditionByPlayerDimensions: false,
      smoothQualityChange: false,
      nativeCaptions: false,
      nativeAudioTracks: false,
      nativeVideoTracks: false,
    },
  },
};

export default initialOptions;

/**
 * @name CustomVideoBackgroundReplacer
 * @author hugo3125soko312
 * @description Replaces lobby & party background with a custom video background using Pengu Loader.
 * @version 1.0.8
 */

import { settings } from "./config.js";

export async function init(ctx) {
  const { video, audio } = settings;

  const style = document.createElement("style");
  style.textContent = `
    #custom-video-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      z-index: -10;
      pointer-events: none;
    }

    .rcp-fe-viewport, .rcp-fe-app, body {
      background: transparent !important;
    }

    .rcp-fe-viewport *, .rcp-fe-app * {
      background-color: transparent !important;
    }

    img[src*="parties-background.jpg"] {
      display: none !important;
    }
  `;
  document.head.appendChild(style);

  const injectMedia = () => {
    // Prevent duplicate video
    if (!document.getElementById("custom-video-bg")) {
      const videoElem = document.createElement("video");
      videoElem.id = "custom-video-bg";
      videoElem.src = video.url;
      videoElem.autoplay = video.autoplay;
      videoElem.loop = video.loop;
      videoElem.muted = audio.enabled || video.muted; // mute if using separate audio or if muted is true
      videoElem.volume = video.volume;
      videoElem.playsInline = true;
      document.body.prepend(videoElem);
    }

    // Add custom audio (if enabled)
    if (audio.enabled && audio.url && !document.getElementById("custom-audio-bg")) {
      const audioElem = document.createElement("audio");
      audioElem.id = "custom-audio-bg";
      audioElem.src = audio.url;
      audioElem.autoplay = audio.autoplay;
      audioElem.loop = audio.loop;
      audioElem.volume = audio.volume;
      document.body.appendChild(audioElem);
    }
  };

  const waitForBackground = setInterval(() => {
    const partyBg = document.querySelector('img[src*="parties-background.jpg"]');
    if (partyBg || document.body) {
      clearInterval(waitForBackground);
      injectMedia();
    }
  }, 500);
}

'use client'
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export function YoutubeVideo() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId="zgtfEEuqLEw" opts={opts} onReady={onPlayerReady} />;
}
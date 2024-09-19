import React from 'react'

export default function SpotifyFollow() {

  return (
    <iframe
      src={`https://open.spotify.com/follow/1/?uri=spotify:artist:0WlcBcD95iZnuTM1tIVqw4?si=CrDMy6D1RMGkt9LMHANZGw&size=detail&theme=dark`}
      width="300" 
      height="56" 
      scrolling="no" 
      frameBorder="0" 
      style={{ border: 'none', overflow: 'hidden' }} 
      >
    </iframe>
  )
}
import React from 'react'

export default function SpotifyEmbed({ uri, wide = false }) {
  return (
    <iframe src={uri} width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  )
}
import React from 'react'

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/GlitchGuru09')
    return response.json()
  }
'use client'
import { useEffect, useState, chache } from 'react'

export default function Home() {
  const [aikotoba, setAikotoba] = useState('')

  useEffect(function () {
    fetch('https://ccc-treasure-api.an.r.appspot.com/')
      .then(response => response.json())
      .then(json => json.treasure)
    .then(value => setAikotoba(value))
  }, [])


  
  return (
    <div>{aikotoba}</div>
  )
}

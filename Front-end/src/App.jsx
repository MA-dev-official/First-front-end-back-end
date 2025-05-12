import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jocks, setJocks] = useState([])
  
useEffect(() => {
 fetch('/api/jocks').then(res => res.json()).then(data => setJocks(data)).catch(err => console.log(err))
})
  return (
    <>
      <h1>Jocks: {jocks.length} </h1>
      {jocks.map((jock) => (
      <div key={jock.id}>
        <h1>{jock.title}</h1>
        <p>{jock.content}</p>
      </div>
      ))}
    </>
  )
}

export default App

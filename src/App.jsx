import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
       <Weather></Weather>
    </>
  )
}

export default App

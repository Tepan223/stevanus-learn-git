import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };  

  return (
    <>
    <div className="background-botton">
      <div className='btn-bg'>
      <button onClick={handleToggle} className='style-btn'>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p className='text'>Name: Stevanus Gabriel</p>}
      </div>
    </div>
    </>
  )
}

export default App

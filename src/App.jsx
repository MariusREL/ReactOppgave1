import { useState } from 'react'
import CreateMenuCards from './modules/CreateMenuCards.jsx';
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
<>
        
        <CreateMenuCards />
</>
  )
}

export default App

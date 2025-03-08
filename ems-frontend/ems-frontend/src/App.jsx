import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HelloWorld from './helloWorld'
import { ListEmployeeComponent } from './components/listEmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <HelloWorld /> */}
     <ListEmployeeComponent />
    </>
  )
}

export default App

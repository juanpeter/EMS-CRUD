import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { EmployeeComponent } from './components/EmployeeComponent'
import { ListEmployeeComponent } from './components/listEmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
          <Route path='/add-employee' element={<EmployeeComponent />}></Route>
          <Route path='/update-employee/:id' element={<EmployeeComponent />}></Route>
        </Routes>
      <FooterComponent />
     </BrowserRouter>
    </>
  )
}

export default App

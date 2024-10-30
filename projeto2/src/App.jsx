import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FiltroProdutos from './filtro/FiltroProdutos'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Segundo protótipo do filtro do projeto</h1>
      <FiltroProdutos/>
    </>
  )
}

export default App

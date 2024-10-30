import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterGroup from './componentes/FilterGroup'
import TesteCaixa from './componentes/Teste'









function App() {

  return (
    <>
      <h1>Testando as bibliotecas do react</h1>
      <article>
        <h2>Realizando testes</h2>
        <FilterGroup/>
        <TesteCaixa/>
        
      </article>
    </>
  )
}

export default App

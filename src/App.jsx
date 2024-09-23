import { useState } from 'react'
import { TwitterFollowCard } from './components/TwitterFollowCard'
import './App.css'

function App() {

  return (
    <section className='App'>
      <TwitterFollowCard 
        name={"Miguel Angel"}
        userName={'midudev'}
      />
      <TwitterFollowCard 
        name={"Brais Moure"}
        userName={'mouredev'}
      />
      <TwitterFollowCard 
        name={"Lucas Dalto"}
        userName={'soydalto'}
      />
    </section>
  )
}

export default App

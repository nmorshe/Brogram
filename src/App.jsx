import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Layout from './components/Layout'
import Grid from './components/Grid'
import Hero from './components/Hero'

function App() {

  return (
    <Layout>
      <main>
        <Hero />
        <Grid />
      </main>
    </Layout>
  )
}

export default App

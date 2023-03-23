import React from 'react'
import './App.css'
import './index.css'

import { Blog, Features, Footer, Header, WhatGPT3, Possibility } from './containers'
import { Cta, Navbar, Brand} from './components';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App





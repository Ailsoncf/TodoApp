import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Todo from './Todo/Todo'
import About from './About/About'
import Menu from './template/Menu'

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Route component={Todo} path='/todos' />
      <Route component={About} path='/about' />
    </BrowserRouter>
  )
}

export default Routes
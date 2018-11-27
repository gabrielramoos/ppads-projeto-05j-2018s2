import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <AppContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('root')
)

registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AIChat from './components/SwipeAI.jsx'
import { MessageProvider } from './components/MessageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MessageProvider>
  <App/>
</MessageProvider>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import {RecoilRoot} from "recoil"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Header/>
      <App />
      <Footer/>
    </RecoilRoot>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AdviceApp from './components/advice'
// import './index.css'
// import App from './App.jsx'
// import Component from './App.jsx'
// import { Card } from 'flowbite-react'
// import Carts from './components/cart.jsx'
// import UserDetail from './components/UserDatails.jsx'
// import Registerfrom from './components/regisFrom.jsx'
// import "./components/registerfrom.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> 
    <Component />
    <Carts /> 
    <UserDetail/>
    <Registerfrom/>

    */}
    <AdviceApp/>
  </StrictMode>,
)

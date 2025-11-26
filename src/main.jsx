import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Thoufeeq from './App.jsx'
import Store from './redux/Store.jsx'
import {Provider} from 'react-redux' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
   <Thoufeeq/>
   </Provider>
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import Home from './pages/Home.jsx'
import Pinned from './pages/Pinned.jsx'
import Trash from './pages/Trash.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='pinned' element={<Pinned />} />
      <Route path='trash' element={<Trash />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)

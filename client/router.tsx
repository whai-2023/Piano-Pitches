import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Home from './components/Home'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

export const routes = createRoutesFromElements(
  <Route path="/">
    <Route path="/page2" element={<Page2 />} />
    <Route path="/page3" element={<Page3 />} />
    <Route path="/" element={<Home />} />
  </Route>
)

export const router = createBrowserRouter(routes)

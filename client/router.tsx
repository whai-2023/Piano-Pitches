import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Home from './components/Home'
import WhaiPiano from './components/WhaiPiano'
import BecomeASinger from './components/BecomeASinger'
import Playground from './components/Playground'

export const routes = createRoutesFromElements(
  <Route path="/">
    <Route path="/WhaiPiano" element={<WhaiPiano />} />
    <Route path="/BecomeASinger" element={<BecomeASinger />} />
    <Route path="/Playground" element={<Playground />} />
    <Route path="/" element={<Home />} />
  </Route>
)

export const router = createBrowserRouter(routes)

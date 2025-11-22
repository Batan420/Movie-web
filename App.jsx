import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import { WatchlistProvider } from './context/WatchlistContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <WatchlistProvider>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='Watchlist' element={<Watchlist />}></Route>
     </Routes>
     </BrowserRouter>
    </WatchlistProvider>
  )
}

export default App

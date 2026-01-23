import { useState } from 'react'
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import {Suspense, Lazy} from 'react'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import LeaderBoard from './pages/LeaderBoard'

const Result = Lazy(() => import('./pages/Result')) //Lazy is not a function error fixed
import './App.css'

function App() {

  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/result' element={<Suspense fallback={<div>Loading...</div>}> <Result/> </Suspense>}/>
                <Route path='/leaderboard' element={<LeaderBoard/>}/>
              </Routes>
        </BrowserRouter>
      </>
  )
}

export default App








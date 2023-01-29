import React from 'react'
import RoomList from './api/RoomList'
import {Routes,Route} from 'react-router-dom'
import RoomCreate from './api/RoomCreate'
import RoomEdit from './api/RoomEdit'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import FllorOne from './floors/FllorOne'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<RoomList/>}/>
        <Route path='/room/create' element={<RoomCreate/>}/>
        <Route path='/room/edit/:roomid' element={<RoomEdit/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Page404/>}/>
        <Route path='/mərtəbə1' element={<FllorOne/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App

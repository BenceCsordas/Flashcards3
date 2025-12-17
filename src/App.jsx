import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Topic from './pages/Topic'
import AddTopic from './pages/AddTopic'
import AddCard from './pages/AddCard'
import MyFlashCard from './components/MyFlashCard'
import Header from './components/Header'
import { useContext } from 'react'
import { MyAuthContext } from './context/AuthContext'

function App() {
  
const {hasAccess} = useContext(MyAuthContext)

  return (
    <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/topics' element={<Topic/>}/> 
          <Route path='/addTopic' element={hasAccess ? <AddTopic/> : <Home/>}/> 
          <Route path='/addCard/:id' element={hasAccess ? <AddCard/> : <Home/>}/> 
          <Route path='/topics/:id' element={<MyFlashCard/>}/>
        </Routes>
    </div>
  )
}

export default App

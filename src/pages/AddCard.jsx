import React, { useContext, useState } from 'react'
import { addCard } from '../fireBaseBackend'
import { useNavigate, useParams } from 'react-router'
import { MyAuthContext } from '../context/AuthContext'

const AddCard = () => {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const {hasAccess, clearKey, currentTopic} = useContext(MyAuthContext)
  const {id} = useParams()
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let inputData = {question, answer}
    console.log(inputData)
    await addCard(id, inputData)
    navigate("/topics")
  }

  const handleLogout = () => {
    clearKey()
    navigate("/")
  }

  return (
      <div className='formDiv'>
        <form onSubmit={handleSubmit} className='cardForm'>
          <h1>Kártya hozzáadása</h1>
          <h2 style={{textAlign:"center"}}>{currentTopic}</h2>
            {/* <label>Kérdés:</label> */}
            <input type='text' placeholder='Kérdés' required onChange={(e)=>setQuestion(e.target.value)}></input>
            {/* <label>Válasz:</label> */}
            <input type='text' placeholder='Válasz' required onChange={(e)=>setAnswer(e.target.value)}></input>
            <button type="submit">Hozzáadás</button>
        </form>
        {hasAccess && <button className="logoutBtn" onClick={handleLogout}>Kilépés admin módból</button>}
      </div>
    
  )
}

export default AddCard

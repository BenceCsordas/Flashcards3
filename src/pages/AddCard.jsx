import React, { useState } from 'react'
import { addCard } from '../fireBaseBackend'
import { useNavigate, useParams } from 'react-router'

const AddCard = () => {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const {id} = useParams()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    let inputData = {question, answer}
    console.log(inputData)
    await addCard(id, inputData)
    navigate("/topics")
  }

  return (
    
        <form onSubmit={handleSubmit}>
            <label>Kérdés:</label>
            <input type='text' required onChange={(e)=>setQuestion(e.target.value)}></input>
            <label>Válasz:</label>
            <input type='text' required onChange={(e)=>setAnswer(e.target.value)}></input>
            <button type="submit">Hozzáadás</button>
        </form>
    
  )
}

export default AddCard

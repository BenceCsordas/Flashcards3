import React, { useState } from "react";
import { useNavigate } from "react-router";
import { addTopic, readTopicsOnce } from "../fireBaseBackend";

const AddTopic = () => {
  const [ topic, setTopic ] = useState();
  const navigate = useNavigate();

  console.log(topic)
  const handleSubmit = async (e) => {

    e.preventDefault()
    await addTopic(topic)

  }

  return (
  
    <form onSubmit={handleSubmit} className="topicForm">
        
        <h1>Témakör</h1>
        <input type="text" required onChange={(e)=>setTopic(e.target.value)}/>
        <button type="submit">Témakör hozzáadása</button>
    </form>

  )
};

export default AddTopic;

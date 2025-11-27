import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { MyUserContext } from '../context/MyUserProvider';

const Home = () => {

  const navigate = useNavigate()


  const { token } = useContext(MyUserContext);
    console.log(token);
    
    return (
      <div>
        {/* <input type="text" value={newTopic} onChange={(e)=>setNewTopic(e.target.value)}/> */}
        <button onClick={()=>navigate("/addTopic")}>Témakörök hozzáadása</button>
        <button onClick={()=>navigate("/topics")}>Témakörök</button>
        {/* {token ? <p>true</p> : <p>false</p>} */}
      </div>
    );
  };

export default Home

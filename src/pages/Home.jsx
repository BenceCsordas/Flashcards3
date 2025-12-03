import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { MyAuthContext, MyUserContext } from "../context/AuthContext";
import AccessKeyModal from "../components/AccessKeyModal";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const {hasAccess} = useContext(MyAuthContext)
  // const { token } = useContext(MyUserContext);
  // console.log(token);

  const handleAddTopic = () => {

      if(hasAccess){
        navigate("/addTopic")
      }else {
        setOpen(true)
      }

  }
  return (
    <div className="Home">
      {/* <input type="text" value={newTopic} onChange={(e)=>setNewTopic(e.target.value)}/> */}
      <button onClick={handleAddTopic}>
        Témakörök hozzáadása
      </button>
      <button onClick={() => navigate("/topics")}>Témakörök</button>
      {/* {token ? <p>true</p> : <p>false</p>} */}
      <AccessKeyModal open={open} onClose={()=>setOpen(false)} onSuccess={()=>navigate('/addTopic')}/>


    </div>
  );
};

export default Home;

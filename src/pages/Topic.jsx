import React, { useContext, useEffect, useState } from "react";
// import { MyUserContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { readTopicsOnce } from "../fireBaseBackend";
import AccessKeyModal from "../components/AccessKeyModal";
import { MyAuthContext } from "../context/AuthContext";

const Topic = () => {
  
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  const {setCurrentTopic} = useContext(MyAuthContext)
  console.log(topics);
  useEffect(() => {
    readTopicsOnce(setTopics);
  }, []);
  const navigateTopic = (obj) => {
     navigate("/topics/" + obj.id)
     setCurrentTopic(obj.name)
  }
  return (
    <div className="topics">
      {topics &&
        topics.map((obj) => (
          <button onClick={() => navigateTopic(obj)} key={obj.id}>
            {obj.name}
          </button>
        ))}
        
    </div>
  );
};

export default Topic;

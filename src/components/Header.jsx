import React from 'react'
import { useNavigate } from 'react-router'
import { FaHouseChimney } from "react-icons/fa6";
import { MyAuthContext } from '../context/AuthContext';
import { CgLogOut } from "react-icons/cg";
import { useContext } from 'react';

const Header = () => {
    const navigate = useNavigate()
    const {hasAccess, clearKey} = useContext(MyAuthContext)

    const handleLogout = () => {
    clearKey()
    navigate("/")
    }
  return (
    <div className='header'>
        <span onClick={()=>navigate("/")}><FaHouseChimney size={25}/></span>
        {hasAccess && <span onClick={handleLogout}><CgLogOut size={25}/></span>}
    </div>
  )
}

export default Header

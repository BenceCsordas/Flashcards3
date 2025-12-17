import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useEffect } from 'react'

export const MyAuthContext = createContext()

// const API_URL = "http://localhost:3001"

const MyUserProvider = ({children}) => {
    const [hasAccess, setHasAccess] = useState(false)
    const [loading, setLoading] = useState(true)    

    useEffect(()=>{
        const checkAuth = async () => {
            try {
                await axios.get(`${import.meta.env.VITE_API_URL}/protected`,{withCredentials:true})
                setHasAccess(true)
            } catch (error) {
                console.log(error)
                setHasAccess(false)
            }finally {
                setLoading(false)
            }
        }

        checkAuth()
    },[])


    const verifyKey = async (key) => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/login`, {key}, {withCredentials:true})
            setHasAccess(true)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    const clearKey = async (key) => {
        await axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, {withCredentials:true})
        setHasAccess(false)
    }

    console.log(hasAccess)

  return (
    <div>
          <MyAuthContext.Provider value={{hasAccess, verifyKey, clearKey}}>
            {children}
          </MyAuthContext.Provider>
        </div>
  )
}

export default MyUserProvider

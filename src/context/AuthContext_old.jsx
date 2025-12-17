import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { sha1 } from '../utils'

export const MyUserContext = createContext()
export const MyAuthContext = createContext()
const STORED_HASH = "1ea90264dd99eea07d2d91335d5f3f0e319ee596"
const MyUserProvider = ({children}) => {
    const [hasAccess, setHasAccess] = useState(false)
    

    const verifyKey = async (key) => {
        const hash = await sha1(key)
        const result = hash === STORED_HASH //true vagy false
        if(result) setHasAccess(true)
        return result //fontos lesz a modalnak
    }

    const clearKey = (key) => {
        setHasAccess(false)
    }

  return (
    <div>
          <MyAuthContext.Provider value={{hasAccess, verifyKey, clearKey}}>
            {children}
          </MyAuthContext.Provider>
        </div>
  )
}

export default MyUserProvider

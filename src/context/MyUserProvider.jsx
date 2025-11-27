import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router'

export const MyUserContext = createContext()
const MyUserProvider = ({children}) => {
    const [token, setToken] = useState(false)

    const navigate = useNavigate()
  return (
    <div>
          <MyUserContext.Provider value={{token}}>
            {children}
          </MyUserContext.Provider>
        </div>
  )
}

export default MyUserProvider

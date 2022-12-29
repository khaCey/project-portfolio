import { createContext } from 'react';
import { useState } from 'react'

export const NavContext = createContext();
const NavProvider = ({ children }) => {
    const [activeLinkID, setActiveLinkID] = useState("");

    const providerValue = {
        activeLinkID,
        setActiveLinkID
    }
  return (
    <NavContext.Provider value={providerValue}>
        {children}
    </NavContext.Provider>
  )
}

export default NavProvider
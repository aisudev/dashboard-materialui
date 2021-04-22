import { createContext, useState } from 'react'
export const context = createContext(null)



export default function Provider({ children }) {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <context.Provider
            value={{
                open, handleOpen,
            }}
        >
            {children}
        </context.Provider>
    )
}
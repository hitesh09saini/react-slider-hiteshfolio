
import * as React from 'react'

type PropsType = {
    children: React.ReactNode
}

const Button = ({ children }: PropsType) => {
    return (
        <div style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
        }}>
            {children || "Button"}
        </div>
    )
}

export { Button }
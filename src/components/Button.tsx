
import * as React from 'react'

type PropsType = {
    children: React.ReactNode,
    onClick: any
}

const Button = ({ children, onClick }: PropsType) => {
    return (
        <div onClick={onClick} style={{
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
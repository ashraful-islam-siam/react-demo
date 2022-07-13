import React from 'react'


const variants = {
    primary: {
        backgroundColor: "blue",
        color: "white"
    },
    success: {
        backgroundColor: "green",
        color: "black"
    },
    info: {
        backgroundColor: "#d4d4d4",
        color: "#000"
    }
}
const sizes = {
    small: {
        padding: "5px 10px"
    }, 
    medium: {
        padding: "7px 12px"
    }, 
    large: {
        padding: "10px 15px"
    }
}

export const Button = (props) => {
    const variant = variants[props.variant]
    const size = sizes[props.size]
    console.log(size)
  return <button style={{
    ...variant,
    ...size
  }} type={props.type}>{props.text}</button>
}

import React from 'react'
import './Button.css'

export interface ButtonProps {
  onClick?: () => void;
  label?:string
}
export const Button:React.FC<ButtonProps> = ({onClick,label}) => {
  return (
    // <div className='animated-button-container'>
      <button className="animated-button" onClick={onClick}>{label}</button>
    // </div>
  )
}
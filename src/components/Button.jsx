import React from "react"

const Button = ({ text, type = "button", isDisable }) => {
  return (
    <button
      type={type}
      className="w-full  capitalize text-white border-2 border-primary rounded-[8px] bg-primary/60 backdrop-blur-sm pt-[11px] pb-[10px]"
      disabled={isDisable}>
      {text}
    </button>
  )
}

export default Button

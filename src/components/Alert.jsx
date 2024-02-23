import React from "react"

const Alert = ({ isErr, message, onClear }) => {
  return (
    <div
      onClick={onClear}
      className={`absolute px-8 py-4 bg-primary transition-all z-10 ${isErr ? "top-4" : "-top-16"} text-common ease-in-out rounded-md capitalize`}>
      <p>{message}</p>
    </div>
  )
}

export default Alert

import React from "react"
import { Link } from "react-router-dom"

const ButtonIcon = ({ path, icon }) => {
  return (
    <Link
      to={path}
      className="w-8 h-8 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-common absolute top-4 right-4 flex items-center justify-center">
      <img src={icon} alt="icon-button" className="w-4 h-4 lg:w-8 lg:h-8" />
    </Link>
  )
}

export default ButtonIcon

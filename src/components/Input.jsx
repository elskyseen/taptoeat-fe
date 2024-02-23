import React from "react"

const Input = ({ type, placeholder, name, register }) => {
  return (
    <input
      className="w-full lg:w-[360px] outline-none border-2 text-white border-common rounded-[8px] pt-[10px] pb-[11px] pl-4 bg-transparent placeholder:text-white mb-4 lg:mb-12 lowercase"
      placeholder={placeholder}
      type={type}
      name={name}
      id={name}
      required={true}
      autoComplete="false"
      {...register(name)}
    />
  )
}

export default Input

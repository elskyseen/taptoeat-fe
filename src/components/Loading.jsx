import React from "react"

const Loading = () => {
  return (
    <div className="absolute bg-black/50 top-0 left-0 right-0 bottom-0 z-20 flex justify-center items-center text-primary capitalize">
      <h1 className="animate-bounce duration-1000 ease-in-out text-xl">please wait</h1>
    </div>
  )
}

export default Loading

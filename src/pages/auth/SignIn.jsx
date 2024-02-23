import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Cookie from "universal-cookie"
import { AuthSignIn } from "../../controllers/api"

import Input from "../../components/Input"
import Button from "../../components/Button"
import iconPencil from "../../assets/svg/icon-pencil.svg"
import ButtonIcon from "../../components/ButtonIcon"
import Loading from "../../components/Loading"
import Alert from "../../components/Alert"

const SignIn = () => {
  const [errMessage, setErrMesaage] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const [isError, setisError] = useState(false)
  const { register, handleSubmit, clearErrors } = useForm()

  const cookie = new Cookie()

  const listInputs = [
    {
      placeholder: "username or email",
      type: "text",
      name: "username",
    },
    {
      placeholder: "password",
      type: "password",
      name: "password",
    },
  ]

  const onSubmit = async (data) => {
    setIsDisable(true)
    setIsLoading(true)
    const response = await AuthSignIn(data)
    if (response.code != 200) {
      setErrMesaage(response.message)
      setIsDisable(false)
      setIsLoading(false)
      setisError(true)
      return
    } else {
      cookie.set("Authorization", response.token, { maxAge: 3600, sameSite: "strict" })
      window.location.href = "/"
    }
  }

  return (
    <div className="w-full min-h-screen max-h-screen bg-sign-in bg-no-repeat bg-cover bg-center object-cover flex justify-center items-center">
      {isLoading && <Loading />}
      {isError && <Alert isErr={isError} message={errMessage} onClear={clearErrors} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 lg:px-[70px] lg:py-[72px] h-screen lg:h-auto w-full lg:w-auto rounded-md bg-primary/45 backdrop-blur-sm flex items-center justify-center flex-col">
        <ButtonIcon icon={iconPencil} path={"/register"} />
        <h1 className="capitalize text-3xl lg:text-[40px] text-main mb-8 lg:mb-[56px]">sign in</h1>
        {listInputs.map((input, i) => {
          return (
            <Input placeholder={input.placeholder} type={input.type} name={input.name} register={register} key={i} />
          )
        })}
        <Button type={"submit"} text={"press to login"} isDisable={isDisable} />
      </form>
    </div>
  )
}

export default SignIn

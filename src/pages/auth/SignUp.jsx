import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../../components/Input"
import Button from "../../components/Button"
import iconPencil from "../../assets/svg/icon-pencil.svg"
import ButtonIcon from "../../components/ButtonIcon"
import { AuthSignup } from "../../controllers/api"
import Loading from "../../components/Loading"
import Alert from "../../components/Alert"

const SignUp = () => {
  const [errMessage, setErrMesaage] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const [isError, setisError] = useState(false)
  const { register, handleSubmit, clearErrors } = useForm()

  const listInputs = [
    {
      placeholder: "username",
      type: "text",
      name: "username",
    },
    {
      placeholder: "email",
      type: "email",
      name: "email",
    },
    {
      placeholder: "password",
      type: "password",
      name: "password",
    },
    {
      placeholder: "confirm password",
      type: "password",
      name: "confirmPassword",
    },
  ]

  const onSubmit = async (data) => {
    setIsDisable(true)
    setIsLoading(true)
    const response = await AuthSignup(data)
    if (response.code != 201) {
      setErrMesaage(response.message)
      setIsDisable(false)
      setIsLoading(false)
      setisError(true)
      return
    } else {
      window.location.href = "/login"
    }
  }

  return (
    <div className="w-full min-h-screen max-h-screen bg-sign-in bg-no-repeat bg-cover bg-center object-cover flex justify-center items-center">
      {isLoading && <Loading />}
      {isError && <Alert isErr={isError} message={errMessage} onClear={clearErrors} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 lg:px-[70px] lg:py-[72px] h-screen lg:h-auto w-full lg:w-auto rounded-md bg-primary/45 backdrop-blur-sm flex items-center justify-center flex-col">
        <ButtonIcon icon={iconPencil} path={"/login"} />
        <h1 className="capitalize text-3xl lg:text-[40px] text-main mb-8 lg:mb-[56px]">sign up</h1>
        {listInputs.map((input, i) => {
          return (
            <Input placeholder={input.placeholder} type={input.type} name={input.name} register={register} key={i} />
          )
        })}
        <Button type={"submit"} text={"press to register"} isDisable={isDisable} />
      </form>
    </div>
  )
}

export default SignUp

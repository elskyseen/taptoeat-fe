import axios from "axios"

const uri = import.meta.env.VITE_API_URL
export const AuthSignUp = async (data) => {
  try {
    const response = await axios
      .post(uri + "/auth/signup", data)
      .then((response) => response.data)
      .catch((error) => error.response.data)
    return response
  } catch (error) {
    console.log("Failed To get hello : ", error)
    throw error
  }
}
export const AuthSignIn = async (data) => {
  try {
    const response = await axios
      .post(uri + "/auth/signin", data)
      .then((response) => response.data)
      .catch((error) => error.response.data)
    return response
  } catch (error) {
    console.log("Failed To get hello : ", error)
    throw error
  }
}

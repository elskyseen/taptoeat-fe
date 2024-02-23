import axios from "axios"

export const AuthSignup = async (data) => {
  const uri = import.meta.env.VITE_API_URL
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

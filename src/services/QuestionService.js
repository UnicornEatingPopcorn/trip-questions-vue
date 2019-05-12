import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getQuestions() {
    return apiClient.get("/questions")
  },
  postQuestions() {
    return apiClient.post("/plan-list", question)
  }
}

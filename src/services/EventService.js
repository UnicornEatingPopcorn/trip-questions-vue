import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-typ": "application/json"
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + page)
  },
  getEvent(id) {
    return apiClient.get("/events/" + id)
  },
  postEvent(event) {
    return apiClient.post("/events", event)
  }
}

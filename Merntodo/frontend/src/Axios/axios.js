import axios from "axios"
const instance = axios.create({
    baseURL:"https://merntodo-khgs.onrender.com/api"
})
export default instance
import axios from 'axios'

const axiosInstance = ()=>{
    return axios.create({
        baseURL:"https://randomuser.me/api/"
    })
}

export default axiosInstance;
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
})

async function getAccessToken(refreshToken){
  const access_token = await axios.post(`http://localhost:5000/`, {
    refresh : refreshToken
  })
  .then(res => console.log(res))
}
export default axiosInstance
import axios from 'axios'

// axios 配置
axios.defaults.timeout = 3000 // 设置超时时间为3s

// 如果为开发环境，将baseURL设置为服务器地址
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8888'
}

// 设置content-type
// 这里处理的是 针对SpringMVC Controller 无法正确获得请求参数的问题
axios.interceptors.request.use(
  config => {
    let data = config.data
    let key = Object.keys(data)
    // 重写data，由{"name":"name","password":"password"} 改为 name=name&password=password
    config.data = encodeURI(key.map(name => `${name}=${data[name]}`).join('&'))
    // 设置Content-Type
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios

 import axios from 'axios'

class AuthService {
  constructor() {
    // Api for localhost version
    //this.api_url = "http://localhost:8000/api/"
    //Api for Amazon EC2 version.
     this.api_url = "http://18.224.38.239:8000/api/"
  }
  request(endpoint, options) {
    const headers = options && options.headers ? options.headers : {}
    return axios({
      ...options,
      url: this.api_url + endpoint,
      headers: headers
    })
  }
}

export default new AuthService()

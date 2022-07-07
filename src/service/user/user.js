import axios from 'axios'

const configOptions = { headers: { 'content-type': 'application/json' } }

class userService {
  async onSignup(credentials) {
    const response = await axios.post('/api/user', credentials, configOptions)
    return response.data
  }
}

export default new userService()
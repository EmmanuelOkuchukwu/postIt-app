import axios from 'axios'

const configOptions = { headers: { 'content-type': 'application/json' } }

class authService {
  async onSignin(credentials) {
    const response = await axios.post('/api/auth', credentials, configOptions)
    localStorage.setItem('userJwt', JSON.stringify(response.data))
    return response.data
  }
}

export default new authService()
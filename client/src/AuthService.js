import auth0 from 'auth0-js'

class Auth {
  constructor () {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      audience: 'https://micro-blog-app',
      redirectUri: process.env.AUTH0_CALLBACK_URL,
      responseType: 'token id_token',
      scope: 'openid profile'
    })

    this.getAccessToken = this.getAccessToken.bind(this)
    this.getProfile = this.getProfile.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  getAccessToken () {
    return this.accessToken
  }

  getProfile () {
    return this.profile
  }

  handleAuthentication () {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err)
        if (!authResult || !authResult.accessToken || !authResult.idToken) {
          return reject(err)
        }
        this.accessToken = authResult.accessToken
        this.idToken = authResult.idToken
        this.profile = authResult.idTokenPayload
        // set the time that the id token will expire at
        this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
        resolve()
      })
    })
  }

  isAuthenticated () {
    return new Date().getTime() < this.expiresAt
  }

  signIn () {
    this.auth0.authorize()
  }

  signOut () {
    // clear id token, profile, and expiration
    this.auth0.logout({
      clientID: 'r2djismSH6lKfHU4rrEVi578mY1rK9cS',
      returnTo: '/'
    })
  }
}

const auth0Client = new Auth()

export default auth0Client

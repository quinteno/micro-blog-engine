'use strict'
const APP_URL = 'http://vuejs-microblog.s3-website-us-east-1.amazonaws.com/'

module.exports = {
  NODE_ENV: '"production"',
  BACKEND_URL: '"https://1t01yk6s59.execute-api.us-east-1.amazonaws.com/latest/micro-posts"',
  AUTH0_CLIENT_ID: '"Pl6w3cFdaIFSspVQsx7PctGg7QR642LC"',
  AUTH0_DOMAIN: '"micro-blog-production.auth0.com"',
  AUTH0_LOGOUT_URL: `"${APP_URL}"`,
  AUTH0_CALLBACK_URL: `"${APP_URL}callback"`
}

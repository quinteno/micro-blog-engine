<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import * as Auth0 from 'auth0-web'

export default {
  name: 'App',
  created () {
    Auth0.configure({
      domain: 'micro-blog-dev.auth0.com',
      audience: 'https://micro-blog-app',
      clientID: 'r2djismSH6lKfHU4rrEVi578mY1rK9cS',
      redirectUri: 'http://localhost:8080/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

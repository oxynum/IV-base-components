/**
 * HTTP request layer
 * if auth is required return patched axios instance(with access token in headers)
 * else return clear axios instance
 */

import axios from 'axios'
import app from '../main'

import { AuthService } from '@/services/auth.service'

export class Http {
  constructor (status, apiUrl) {
    this.isAuth = status && status.auth ? status.auth : false
    this.isAccesstoken = status && status.accessToken ? status.accessToken : false
    this.instance = axios.create({
      baseURL: apiUrl
    })

    this.instance.interceptors.response.use(config => {
      app.$Progress.start()
      return config
    })

    this.instance.interceptors.response.use(response => {
      app.$Progress.finish()
      return response
    })

    return this.init()
  }

  init () {
    if (this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.headers.Auth = AuthService.getIdToken()
        if (this.isAccesstoken) {
          request.headers.AccessToken = AuthService.getAccessToken()
        }
        // if access token expired and refreshToken is exist >> go to API and get new access token
        if (AuthService.getRefreshToken() && AuthService.isAccessTokenExpired()) {
          return AuthService.debounceRefreshTokens()
            .then(response => {
              AuthService.setIdToken(response.data.IdToken)
              request.headers.Auth = AuthService.getIdToken()
              return request
            }).catch(error => Promise.reject(error))
        } else {
          return request
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    return this.instance
  }
}

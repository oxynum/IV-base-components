import * as Fingerprint2 from 'fingerprintjs2'
import * as UAParser from 'ua-parser-js'
import axios from 'axios'

import { ResponseWrapper, ErrorWrapper } from './util'
import $store from '../store'
import $router from '../router'

import { UsersService } from '@/services/users.service'

import { API_URL } from '../.env'

import Vue from 'vue'

export class AuthService {
  static get entity () {
    return 'auth'
  }

  /**
   ******************************
   * @API
   ******************************
   */

  static async makeLogin ({ email, password }) {
    try {
      const fingerprint = await _getFingerprint()
      const response = await axios.post(`${API_URL}/${this.entity}/login`,
        { email, password, fingerprint })
      if (!response.data.action || response.data.action !== 'NEW_PASSWORD_REQUIRED') {
        this.setIsNewPasswordRequired(false)
        _setAuthData({
          accessToken: response.data.AccessToken,
          expiresIn: response.data.ExpiresIn,
          idToken: response.data.IdToken,
          refreshToken: response.data.RefreshToken
        })
      } else {
        this.setIsNewPasswordRequired(true)
      }
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async makeLogout () {
    try {
      _resetAuthData()
      $router.push({ name: 'login' }).catch(() => {})
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async sendEmailCodeOnForgetPassword ({ email }) {
    try {
      const response = await axios.post(`${API_URL}/${this.entity}/forgot-password`, { email })
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async makeConfirmForgotPassword ({ email, new_password, code }) {
    try {
      const response = await axios.post(`${API_URL}/${this.entity}/confirm-forgot-password`, {
        email, new_password, code
      })
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async refreshTokens () {
    try {
      const data = { userId: UsersService.getUserId() }
      const header = {
        headers: {
          'Content-Type': 'application/json',
          RefreshToken: this.getRefreshToken()
        }
      }

      const response = await axios.post(`${API_URL}/${this.entity}/refresh-token`, data, header)
      _setAuthData({
        accessToken: response.data.AccessToken,
        expiresIn: response.data.ExpiresIn,
        idToken: response.data.IdToken,
        refreshToken: response.data.RefreshToken
      })
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      _resetAuthData()
      $router.push({ name: 'login' }).catch(() => {})
      throw new ErrorWrapper(error)
    }
  }

  static async updatePassword ({ name, password, session, userId }) {
    try {
      const fingerprint = await _getFingerprint()
      const response = await axios.post(`${API_URL}/${this.entity}/update-password`,
        { name, password, session, userId, fingerprint })
      this.setIsNewPasswordRequired(false)
      _setAuthData({
        accessToken: response.data.AccessToken,
        expiresIn: response.data.ExpiresIn,
        idToken: response.data.IdToken,
        refreshToken: response.data.RefreshToken
      })
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static debounceRefreshTokens = this._debounce(() => {
    return this.refreshTokens()
  }, 100)

  /**
   ******************************
   * @METHODS
   ******************************
   */

  static isAccessTokenExpired () {
    const accessTokenExpDate = this.getAccessTokenExpDate()
    if (accessTokenExpDate) {
      return accessTokenExpDate <= new Date().getTime()
    }
    return false
  }

  static getRefreshToken () {
    return Vue.cookie.get('refreshToken')
  }

  static setRefreshToken (refreshToken) {
    Vue.cookie.set('refreshToken', refreshToken, 1)
  }

  static setAccessTokenExpDate (accessTokenExpDate) {
    Vue.cookie.set('accessTokenExpDate', accessTokenExpDate, 1)
  }

  static getAccessTokenExpDate (accessTokenExpDate) {
    return Vue.cookie.get('accessTokenExpDate')
  }

  static getIdToken () {
    return Vue.cookie.get('idToken')
  }

  static setIdToken (idToken) {
    Vue.cookie.set('idToken', idToken, 1)
  }

  static getAccessToken () {
    return Vue.cookie.get('accessToken')
  }

  static setAccessToken (accessToken) {
    Vue.cookie.set('accessToken', accessToken, 1)
  }

  static setIsNewPasswordRequired (isNewPasswordRequired) {
    Vue.cookie.set('isNewPasswordRequired', isNewPasswordRequired, 1)
  }

  static isNewPasswordRequired () {
    const isNewPasswordRequired = Vue.cookie.get('isNewPasswordRequired')
    return isNewPasswordRequired === 'true'
  }

  /**
   * https://stackoverflow.com/questions/35228052/debounce-function-implemented-with-promises
   * @param inner
   * @param ms
   * @returns {function(...[*]): Promise<unknown>}
   * @private
   */
  static _debounce (inner, ms = 0) {
    let timer = null
    let resolves = []

    return function () {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const result = inner()
        resolves.forEach(r => r(result))
        resolves = []
      }, ms)

      return new Promise(resolve => resolves.push(resolve))
    }
  }
}

/**
 ******************************
 * @private_methods
 ******************************
 */

function _resetAuthData () {
  // reset userData in store
  $store.commit('user/SET_CURRENT_USER', {})
  $store.commit('auth/SET_ATOKEN_EXP_DATE', null)
  // reset tokens
  AuthService.setRefreshToken('')
  AuthService.setIdToken('')
  AuthService.setAccessToken('')
  AuthService.setAccessTokenExpDate('')
  AuthService.setAccessTokenExpDate('')
  Vue.cookie.set('userId', '')
}

function _setAuthData ({ accessToken, expiresIn, idToken, refreshToken } = {}) {
  AuthService.setRefreshToken(refreshToken)
  AuthService.setIdToken(idToken)
  AuthService.setAccessToken(accessToken)

  const expdate = new Date()
  expdate.setSeconds(expdate.getSeconds() + expiresIn)

  AuthService.setAccessTokenExpDate(expdate.getTime())
}

function _getFingerprint () {
  return new Promise((resolve, reject) => {
    async function getHash () {
      const options = {
        excludes: {
          plugins: true,
          localStorage: true,
          adBlock: true,
          screenResolution: true,
          availableScreenResolution: true,
          enumerateDevices: true,
          pixelRatio: true,
          doNotTrack: true,
          preprocessor: (key, value) => {
            if (key === 'userAgent') {
              const parser = new UAParser(value)
              // return customized user agent (without browser version)
              return `${parser.getOS().name} :: ${parser.getBrowser().name} :: ${parser.getEngine().name}`
            }
            return value
          }
        }
      }

      try {
        const components = await Fingerprint2.getPromise(options)
        const values = components.map(component => component.value)
        console.log('fingerprint hash components', components)

        return String(Fingerprint2.x64hash128(values.join(''), 31))
      } catch (e) {
        reject(e)
      }
    }

    if (window.requestIdleCallback) {
      console.log('get fp hash @ requestIdleCallback')
      requestIdleCallback(async () => resolve(await getHash()))
    } else {
      console.log('get fp hash @ setTimeout')
      setTimeout(async () => resolve(await getHash()), 500)
    }
  })
}

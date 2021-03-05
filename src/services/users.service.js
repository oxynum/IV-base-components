import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { API_URL } from '../.env'

import Vue from 'vue'

export class UsersService extends BaseService {
  static get entity () {
    return 'auth'
  }

  static async getCurrent () {
    try {
      const response = await this.request({ auth: true, accessToken: true }, API_URL).get(`/${this.entity}/me`)

      this.setUserId(response.data.id)
      this.setUserEmail(response.data.email)
      this.setUserName(response.data.name)

      return new ResponseWrapper(response, response.data)
    } catch (error) {
      throw new ErrorWrapper(error, 'message')
    }
  }

  static initCurrent () {
    return {
      name: Vue.cookie.get('userName'),
      email: Vue.cookie.get('userEmail')
    }
  }

  static getUserId () {
    return Vue.cookie.get('userId')
  }

  static setUserId (userId) {
    Vue.cookie.set('userId', userId, 1)
  }

  static setUserEmail (userEmail) {
    Vue.cookie.set('userEmail', userEmail, 1)
  }

  static setUserName (userName) {
    Vue.cookie.set('userName', userName, 1)
  }
}

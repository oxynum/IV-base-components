import $store from '@/store'
import { AuthService } from '@/services/auth.service'
import { UsersService } from '@/services/users.service'

/**
 * Current user state initialization
 * @WARN Must be always first in middleware chain
 */
export async function initCurrentUserStateMiddleware (to, from, next) {
  const currentUserId = UsersService.getUserId()

  if (AuthService.getRefreshToken() && !currentUserId) {
    try {
      await AuthService.debounceRefreshTokens()
      await $store.dispatch('user/getCurrent')
      next()
    } catch (e) {
      console.log(e)
    }
  } else {
    $store.dispatch('user/initCurrent')
    next()
  }
}

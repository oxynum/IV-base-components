import { AuthService } from '@/services/auth.service'
import { UsersService } from '@/services/users.service'

/**
 * Check access permission to auth routes
 */
export function checkAccessMiddleware (to, from, next) {
  const currentUserId = UsersService.getUserId()
  const isAuthRoute = to.matched.some(item => item.meta.isAuth)

  if (isAuthRoute && to.name !== 'changepassword' && AuthService.isNewPasswordRequired()) return next({ name: 'changepassword' })
  if (isAuthRoute && currentUserId) return next()
  if (isAuthRoute) return next({ name: 'login' })
  next()
};

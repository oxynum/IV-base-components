import { checkAccessMiddleware as checkAccess } from './checkAccess'
import { initCurrentUserStateMiddleware as initCurrentUserState } from './initCurrentUserState'
import { setPageTitleMiddleware as setPageTitle } from './setPageTitle'

export default {
  checkAccess,
  initCurrentUserState,
  setPageTitle
}

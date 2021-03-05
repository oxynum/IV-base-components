import Login from '@/views/pages/login/Login'
import LoginConfirmNewPassword from '@/views/pages/login/LoginConfirmNewPassword'
import NewScore from '@/views/pages/new-score/NewScore'
import UploadView from '@/views/pages/new-score/UploadView'
import ResultScoreDatabaseView from '@/views/pages/my-database/ResultScoreDatabaseView'
import SearchPatient from '@/views/pages/my-database/SearchPatient'
import ModelPerformance from '@/views/pages/ModelPerformance'
import FullText from '@/views/pages/FullText'
import Profile from '@/views/pages/Profile'
import NotFoundPage from '@/views/pages/NotFoundPage'
import ChangePassword from '@/views/pages/login/ChangePassword'

export const Routes = [
  {
    path: '/',
    name: 'login',
    meta: { layout: 'center' },
    component: Login
  },
  {
    path: '/change-password',
    name: 'changepassword',
    meta: { layout: 'center' },
    component: ChangePassword
  },
  {
    path: '/forget-password',
    name: 'loginforgetpassword',
    meta: { layout: 'center' },
    component: LoginConfirmNewPassword
  },
  {
    path: '/model-performance',
    name: 'modelperformance',
    meta: { isAuth: true, layout: 'default' },
    component: ModelPerformance
  },
  {
    path: '/privacy-policy',
    name: 'privacypolicy',
    meta: { layout: 'default' },
    component: FullText
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { isAuth: true, layout: 'default' },
    component: Profile
  },
  {
    path: '/new-score',
    name: 'newscore',
    component: NewScore,
    meta: { isAuth: true, layout: 'default' },
    children: [{
      path: ':id/upload',
      name: 'upload',
      component: UploadView
    }]
  },
  {
    path: '/my-database/:patientId?',
    name: 'searchpatient',
    component: SearchPatient,
    meta: { isAuth: true, layout: 'default' }
  },
  {
    path: '/patient/:patientId?/score-details/:scoreId',
    meta: { isAuth: true, layout: 'default' },
    component: ResultScoreDatabaseView
  },
  {
    path: '*',
    component: NotFoundPage,
    meta: { isAuth: false, title: 'ImVitro | not found', layout: 'full-layout' }
  }
]

import React from 'react'
import ROUTER from '../contants/router'
import RootPage from '../views/home'
import ResumePage from '../views/resume'

const routes = [
  {
    path: ROUTER.root,
    element: <RootPage />
  },
  {
    path: ROUTER.resume,
    element: <ResumePage />
  }
]

export default routes

import React from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './router'
export default function App() {
  return <div>{useRoutes(routes)}</div>
}

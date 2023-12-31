import React from 'react'
import { Navigation } from './Navigation'
import { MainHeader } from './MainHeader'

export const Header = () => {
  return (
    <div className='header'>
        <Navigation />
        <MainHeader />
    </div>
  )
}

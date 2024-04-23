import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='flex flex-row justify-between px-4'>
      <h1>Escape Room</h1>
      <Button>Book Now</Button>
    </header>
  )
}

export default Header
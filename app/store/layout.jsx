'use client'
import CopyRight from '@/components/global/CopyRight'
import NavigationBar from '@/components/global/NavigationBar'
import NavigationFooter from '@/components/global/navigationFooter'
import Cart from '@/components/store/Cart'
import React, { useState } from 'react'

const Layout = ({ children }) => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <NavigationBar cartOpen={setopen}/>
      <Cart setOpen={setopen} open={open}/>
      <div className='mt-[48px] md:mt-[60px]'>
      {children}

      </div>

      <NavigationFooter />
      <CopyRight />
    </div>
  )
}

export default Layout
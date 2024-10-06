'use client'
import CopyRight from '@/components/global/CopyRight'
import NavigationBar from '@/components/global/NavigationBar'
import NavigationFooter from '@/components/global/navigationFooter'
import Cart from '@/components/store/Cart'
import { useCart } from '@/utils/functions'
import React, { useState, useEffect } from 'react'

const Layout = ({ children }) => {
  const [open, setopen] = useState(false);
  const {refetchCart} = useCart()
  useEffect(() => {
    refetchCart()
  }, [])
  
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
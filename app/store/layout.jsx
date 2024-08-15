'use client'
import CopyRight from '@/components/global/CopyRight'
import NavigationBar from '@/components/global/NavigationBar'
import NavigationFooter from '@/components/global/navigationFooter'
import Cart from '@/components/store/Cart'
import React, { useState } from 'react'

const layout = ({ children }) => {
  const [open, setopen] = useState(false);
  console.log(open)
  return (
    <div>

      <NavigationBar cartOpen={setopen}/>
      <Cart setOpen={setopen} open={open}/>
      {children}

      <NavigationFooter />
      <CopyRight />
    </div>
  )
}

export default layout
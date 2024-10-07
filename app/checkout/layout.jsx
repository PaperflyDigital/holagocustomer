'use client'
import { useCart } from '@/utils/functions'
import React, {  useEffect } from 'react'

const Layout = ({ children }) => {
  const {refetchCart} = useCart()

  useEffect(() => {
    refetchCart()
  }, [])
  
  return (
    <>
      {children}
    </>
  )
}

export default Layout
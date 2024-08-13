import CopyRight from '@/components/global/CopyRight'
import NavigationBar from '@/components/global/NavigationBar'
import NavigationFooter from '@/components/global/navigationFooter'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
          <NavigationBar />

            {children}
            
          <NavigationFooter />
          <CopyRight />
        </div>
    )
}

export default layout
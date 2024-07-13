import NavbarContainer from '@/app/heropage/navbarContainer'
import React from 'react'
import HeroScreen from '@/app/heropage/heroScreen'

type Props = {}

export default function page({}: Props) {
  return (
    <main className=''>
       <div
      style={{
        backgroundImage: "url('/circle.svg'),url('/circle.svg'),url('/circle.svg'),url('/circle.svg')",
        backgroundSize: "60%,70%,70%,50%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-50% -10%, 180% 25%, 12% 80%, 88% 80%",
        scrollbarWidth: 'none'
      }}
    >
        <div>
          <NavbarContainer />
          <HeroScreen />
        </div>

      </div>
    </main>
    
  )
}
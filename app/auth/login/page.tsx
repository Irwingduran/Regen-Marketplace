import React from 'react'
import Image from 'next/image'
import { ConnectButton } from 'thirdweb/react'
import { client } from '../../client';
import Menu from '@/components/menu'

const page = () => {
  return (
    <> 
    <Menu/>
<div>
    <div className="bg-gradient-to-b from-blue-40/90 to-blue-100/90 flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/img/backgroundimg321.png"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
          quality={100}
        />       
        <div>
          <h1>Welcome</h1>
        </div>
    <div>
        <ConnectButton
        client={client}/>
    </div>

    </div>

</div>

</>
  )
}

export default page
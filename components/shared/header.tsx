import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'

const header = () => {
  return (
    <header className=' w-full border-b'> 
    <div className='wrapper flex items-center justify-between'>
      <Link href="/" className='w-36'>
        <Image src="/assets/images/logo.svg" width={128} height={38} alt='Evently logo'/>
        
      </Link>

      <div className='flex w-32 justify-end gap-3'>
        <SignedOut>
            <Button asChild className='rouded-full' size="lg">
                <Link>
                </Link>
            </Button>
        </SignedOut>
      </div>
    </div>
    </header>
  )
}

export default header
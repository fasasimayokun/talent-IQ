import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import React from 'react'

function HomePage() {
  return (
    <div>
      <button className='btn btn-secondary'>click me</button>

      <SignedOut>
        <SignInButton mode='modal'>
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  )
}

export default HomePage
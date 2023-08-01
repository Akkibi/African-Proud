import type { NextPage } from 'next'
import { useEffect } from 'react'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Concours: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (true) {
        window.location.pathname = '/sign-in'
      }
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="h-full min-h-screen w-full">concours</div>
      <Footer />{' '}
    </>
  )
}

export default Concours

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 container mx-auto p-4">
        {children}
      </main>

      <Footer />
    </div>
  )
}

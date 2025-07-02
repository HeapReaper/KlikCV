import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FooterAd from "~/components/sections/FooterAd";

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

      <div className="container mx-auto p-4">
        <FooterAd />
      </div>

      <Footer />
    </div>
  )
}

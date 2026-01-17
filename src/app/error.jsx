'use client' 

import React, { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
        <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 17c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      
      <h2 className="text-3xl font-serif font-bold text-white mb-2">Something went wrong!</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        We're having trouble loading this page. This could be due to a server connection issue or a temporary glitch.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-amber-600 hover:bg-amber-700 text-black font-bold py-3 px-8 rounded-lg transition-all"
        >
          Try Again
        </button>
        <Link 
          href="/" 
          className="border border-gray-700 hover:bg-white/5 text-white font-bold py-3 px-8 rounded-lg transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
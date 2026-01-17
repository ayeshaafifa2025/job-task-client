import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-black text-white/5 absolute">404</h1>
      <h2 className="text-4xl font-serif font-bold text-amber-500 mb-4 z-10">Page Not Found</h2>
      <p className="text-gray-400 mb-8 z-10">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="bg-amber-600 hover:bg-amber-700 text-black font-bold py-3 px-10 rounded-lg transition-all z-10"
      >
        BACK TO HOME
      </Link>
    </div>
  )
}
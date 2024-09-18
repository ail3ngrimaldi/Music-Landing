import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Bel Grim
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/music">Music</Link></li>
            <li><Link href="/videos">Videos</Link></li>
            <li><Link href="/tour">Tour</Link></li>
            <li><Link href="/merch">Merch</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Artist Name</h1>
            <p className="text-2xl mb-8">Latest Album: "Album Title"</p>
            <Link href="/music" className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Listen Now
            </Link>
          </div>
        </section>

        {/* Music Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-8">Latest Tracks</h2>
          <div className="flex justify-center space-x-4">
            {/* Replace with actual Spotify embeds */}
            <div className="w-64 h-80 bg-gray-800 rounded-lg"></div>
            <div className="w-64 h-80 bg-gray-800 rounded-lg"></div>
            <div className="w-64 h-80 bg-gray-800 rounded-lg"></div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-8">Videos</h2>
          <div className="flex justify-center space-x-4">
            {/* Replace with actual video embeds or GIFs */}
            <div className="w-96 h-54 bg-gray-800 rounded-lg"></div>
            <div className="w-96 h-54 bg-gray-800 rounded-lg"></div>
          </div>
        </section>

        {/* Tour Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-8">Upcoming Shows</h2>
          <div className="max-w-2xl mx-auto">
            {/* Replace with actual tour dates */}
            <div className="bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">City Name</h3>
                <p>Venue Name</p>
              </div>
              <div>
                <p className="text-lg">Date</p>
                <Link href="#" className="text-sm underline">Tickets</Link>
              </div>
            </div>
            {/* Add more tour date items here */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Follow Artist Name</h3>
              <div className="flex space-x-4">
                {/* Add social media icons/links here */}
                <a href="#" className="text-2xl">📷</a>
                <a href="#" className="text-2xl">🐦</a>
                <a href="#" className="text-2xl">📘</a>
                <a href="#" className="text-2xl">🎵</a>
              </div>
            </div>
            <div>
              <p>&copy; 2023 Artist Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
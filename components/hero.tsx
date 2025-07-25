import Link from "next/link"

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-900/5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="brush-border p-12 md:p-16 bg-black/40 backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-cinzel">
            <span className="text-blue-600">MANYU</span> <span className="text-gray-300">WIF HAT</span>
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 text-gray-300 font-light">The Premier Hat-Wearing Meme Token</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-400 calligraphy leading-relaxed">
            Join the most sophisticated meme coin community where style meets substance.
            <br />
            Built on Base network for optimal performance and security.
          </p>

          {/* Token Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-blue-900/20 border border-blue-600/30 px-6 py-3 rounded-lg">
              <span className="text-gray-400 text-sm block">Total Supply</span>
              <span className="text-blue-600 font-bold text-lg">1,000,000,000 MANYU</span>
            </div>
            <div className="bg-black/30 border border-gray-600/30 px-6 py-3 rounded-lg">
              <span className="text-gray-400 text-sm block">Network</span>
              <span className="text-white font-bold text-lg">Base</span>
            </div>
            <div className="bg-blue-900/20 border border-blue-600/30 px-6 py-3 rounded-lg">
              <span className="text-gray-400 text-sm block">Available On</span>
              <span className="text-blue-600 font-bold text-lg">Ape Store</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#buy"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-cinzel font-bold text-lg transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              BUY MANYU
            </a>
            <Link href="#about" className="zen-button text-blue-600 hover:text-blue-500 px-10 py-4 font-cinzel text-lg">
              Learn More
            </Link>
            <Link
              href="#tokenomics"
              className="zen-button text-gray-300 hover:text-white px-10 py-4 font-cinzel text-lg"
            >
              Tokenomics
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-16 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-600 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

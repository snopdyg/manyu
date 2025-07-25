"use client"

import { ExternalLink, Copy, CheckCircle, Shield, Zap, Users } from "lucide-react"
import { useState } from "react"

const Buy = () => {
  const [copied, setCopied] = useState(false)
  const contractAddress = "Coming Soon..."

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const buyOptions = [
    {
      name: "Ape Store",
      description: "Premier DEX for Base network tokens",
      url: "#",
      icon: Shield,
      featured: true,
    },
    {
      name: "Uniswap V3",
      description: "Leading decentralized exchange",
      url: "#",
      icon: Zap,
      featured: false,
    },
    {
      name: "SushiSwap",
      description: "Multi-chain DEX platform",
      url: "#",
      icon: Users,
      featured: false,
    },
  ]

  return (
    <section id="buy" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-6 font-cinzel">How to Purchase MANYU</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto calligraphy leading-relaxed">
            Join the MANYU WIF HAT ecosystem through our secure and verified trading platforms. Built on Base network
            for fast, low-cost transactions.
          </p>
        </div>

        {/* Token Information Card */}
        <div className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-600/30 p-10 brush-stroke rounded-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold font-cinzel text-blue-600 mb-4">MANYU WIF HAT Token</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
              <div className="bg-black/30 p-4 rounded-lg">
                <span className="text-gray-400 block mb-2">Token Symbol</span>
                <span className="text-white font-bold text-xl">MANYU</span>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <span className="text-gray-400 block mb-2">Total Supply</span>
                <span className="text-blue-600 font-bold text-xl">1,000,000,000</span>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <span className="text-gray-400 block mb-2">Network</span>
                <span className="text-green-500 font-bold text-xl">Base</span>
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="bg-black/50 border border-blue-900/30 p-6 rounded-lg text-center">
            <p className="text-gray-400 mb-3 text-lg">Contract Address</p>
            <div className="flex items-center justify-center gap-3">
              <code className="text-blue-600 font-mono text-lg bg-blue-900/20 px-4 py-2 rounded-lg">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="p-3 hover:bg-blue-900/20 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                {copied ? (
                  <CheckCircle size={20} className="text-green-500" />
                ) : (
                  <Copy size={20} className="text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Trading Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {buyOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <div
                key={index}
                className={`p-8 border brush-stroke transition-all duration-300 hover:transform hover:scale-105 rounded-xl ${
                  option.featured
                    ? "border-blue-600/50 bg-blue-900/10"
                    : "border-blue-900/20 bg-black hover:border-blue-600/30"
                }`}
              >
                <div className="text-center">
                  <div className="mb-6">
                    <IconComponent size={48} className="text-blue-600 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold font-cinzel text-blue-600 mb-3">{option.name}</h3>
                  <p className="text-gray-400 mb-6">{option.description}</p>
                  {option.featured && (
                    <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-6 inline-block font-semibold">
                      RECOMMENDED
                    </div>
                  )}
                  <a
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="zen-button w-full text-blue-600 hover:text-blue-500 px-6 py-3 font-cinzel flex items-center justify-center rounded-lg"
                  >
                    Trade on {option.name}
                    <ExternalLink size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Purchase Guide */}
        <div className="bg-black border border-blue-900/20 p-10 brush-stroke rounded-xl">
          <h3 className="text-3xl font-bold mb-8 font-cinzel text-blue-600 text-center">Purchase Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                1
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">Get ETH</h4>
              <p className="text-gray-300">
                Purchase ETH from any major exchange and transfer to your Base-compatible wallet.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                2
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">Connect Wallet</h4>
              <p className="text-gray-300">
                Connect your MetaMask, Coinbase Wallet, or other Base-compatible wallet to the DEX.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                3
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">Swap ETH</h4>
              <p className="text-gray-300">
                Use the contract address to find MANYU and swap your ETH for MANYU tokens.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                4
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">Hold & Participate</h4>
              <p className="text-gray-300">
                Welcome to MANYU! Hold your tokens and participate in our growing community.
              </p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-10 bg-yellow-900/10 border border-yellow-600/20 p-6 rounded-xl text-center">
          <div className="flex items-center justify-center mb-3">
            <Shield className="text-yellow-500 mr-2" size={24} />
            <span className="text-yellow-500 font-semibold text-lg">Security Notice</span>
          </div>
          <p className="text-yellow-400">
            Always verify the contract address and only purchase from official sources. Be cautious of scams and fake
            tokens.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Buy

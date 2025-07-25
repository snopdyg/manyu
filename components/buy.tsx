"use client"

import { Copy, CheckCircle, ExternalLink } from "lucide-react"
import { useState } from "react"

const Buy = () => {
  const [copied, setCopied] = useState(false)
  const contractAddress = "Coming Soon..."

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="buy" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-6 font-cinzel">How to Purchase MANYU</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto calligraphy leading-relaxed">
            Purchase MANYU tokens exclusively through Ape Store. Built on Base network for fast, low-cost transactions.
          </p>
        </div>

        {/* Token Information Card */}
        <div className="mb-16 bg-blue-900/20 border border-blue-600/30 p-10 brush-stroke rounded-xl">
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
                <span className="text-white font-bold text-xl">Base</span>
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
                  <CheckCircle size={20} className="text-blue-600" />
                ) : (
                  <Copy size={20} className="text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Ape Store Section */}
        <div className="mb-16 bg-black border border-blue-900/20 p-10 brush-stroke rounded-xl text-center">
          <h3 className="text-3xl font-bold font-cinzel text-blue-600 mb-6">Buy on Ape Store</h3>
          <p className="text-gray-400 mb-8 text-lg">
            MANYU is exclusively available on Ape Store, the premier decentralized exchange for Base network tokens.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 font-cinzel font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Trade on Ape Store
            <ExternalLink size={20} className="ml-3" />
          </a>
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
                Connect your MetaMask, Coinbase Wallet, or other Base-compatible wallet to Ape Store.
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
      </div>
    </section>
  )
}

export default Buy

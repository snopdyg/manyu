import { PieChart, Lock, Users, Heart, Zap } from "lucide-react"

const Tokenomics = () => {
  const tokenInfo = {
    name: "MANYU WIF HAT",
    symbol: "MANYU",
    totalSupply: "1,000,000,000",
    network: "Base",
    contractAddress: "Coming Soon...",
    listedOn: "Ape Store",
  }

  return (
    <section id="tokenomics" className="py-24 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-6 font-cinzel">Tokenomics</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto calligraphy leading-relaxed">
            Transparent and sustainable token distribution designed to reward our community and ensure long-term project
            success on the Base network.
          </p>
        </div>

        {/* Token Information */}
        <div className="mb-16 bg-blue-900/20 border border-blue-600/30 p-10 brush-stroke rounded-xl">
          <div className="flex items-center justify-center mb-8">
            <PieChart className="text-blue-600 mr-4" size={40} />
            <h3 className="text-3xl font-bold font-cinzel text-blue-600">Token Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-black/30 p-6 rounded-lg">
              <p className="text-gray-400 mb-2">Token Name</p>
              <p className="text-white font-bold font-cinzel text-xl">{tokenInfo.name}</p>
            </div>
            <div className="text-center bg-black/30 p-6 rounded-lg">
              <p className="text-gray-400 mb-2">Symbol</p>
              <p className="text-white font-bold font-cinzel text-xl">{tokenInfo.symbol}</p>
            </div>
            <div className="text-center bg-black/30 p-6 rounded-lg">
              <p className="text-gray-400 mb-2">Total Supply</p>
              <p className="text-blue-600 font-bold text-xl">{tokenInfo.totalSupply}</p>
            </div>
            <div className="text-center bg-black/30 p-6 rounded-lg">
              <p className="text-gray-400 mb-2">Network</p>
              <p className="text-white font-bold text-xl">{tokenInfo.network}</p>
            </div>
            <div className="text-center bg-black/30 p-6 rounded-lg md:col-span-2">
              <p className="text-gray-400 mb-2">Available On</p>
              <p className="text-blue-600 font-bold text-xl">{tokenInfo.listedOn}</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-black border border-blue-900/20 p-10 brush-stroke rounded-xl">
          <h3 className="text-3xl font-bold mb-8 font-cinzel text-blue-600 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Lock className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-2 text-lg">Locked Liquidity</h4>
                <p className="text-gray-300">
                  Liquidity locked for 2 years to ensure project stability and investor confidence.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-2 text-lg">Community Driven</h4>
                <p className="text-gray-300">
                  Token distribution designed to reward community participation and ecosystem growth.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Heart className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-2 text-lg">Charitable Impact</h4>
                <p className="text-gray-300">
                  Portion allocated to animal welfare and charitable causes that align with our values.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Zap className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-2 text-lg">Base Network</h4>
                <p className="text-gray-300">Built on Base for fast, secure, and cost-effective transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics

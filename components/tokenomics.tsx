import type React from "react"
import { PieChart, Users, Lock, Zap, Heart, TrendingUp } from "lucide-react"

type TokenAllocation = {
  id: number
  category: string
  percentage: number
  amount: string
  description: string
  color: string
  icon: React.ElementType
}

const AllocationCard = ({ allocation }: { allocation: TokenAllocation }) => {
  const Icon = allocation.icon

  return (
    <div className="bg-black p-8 border border-blue-900/20 brush-stroke rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div
            className={`p-4 mr-4 border border-blue-900/20 rounded-lg`}
            style={{ backgroundColor: `${allocation.color}20` }}
          >
            <Icon className="text-blue-600" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold font-cinzel text-blue-600">{allocation.category}</h3>
            <p className="text-3xl font-bold text-white">{allocation.percentage}%</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-400">Amount</p>
          <p className="text-white font-bold text-lg">{allocation.amount}</p>
        </div>
      </div>
      <p className="text-gray-300 calligraphy">{allocation.description}</p>
    </div>
  )
}

const Tokenomics = () => {
  const tokenAllocations: TokenAllocation[] = [
    {
      id: 1,
      category: "Community & Rewards",
      percentage: 40,
      amount: "400M MANYU",
      description: "Reserved for community rewards, airdrops, and incentivizing participation in our ecosystem growth.",
      color: "#3B82F6",
      icon: Users,
    },
    {
      id: 2,
      category: "Liquidity Pool",
      percentage: 25,
      amount: "250M MANYU",
      description: "Allocated for DEX liquidity to ensure smooth trading and price stability across all platforms.",
      color: "#10B981",
      icon: TrendingUp,
    },
    {
      id: 3,
      category: "Development & Marketing",
      percentage: 20,
      amount: "200M MANYU",
      description: "Funding for continuous development, strategic partnerships, and comprehensive marketing campaigns.",
      color: "#F59E0B",
      icon: Zap,
    },
    {
      id: 4,
      category: "Team & Advisors",
      percentage: 10,
      amount: "100M MANYU",
      description: "Locked tokens for core team and advisors, vested over 24 months to ensure long-term commitment.",
      color: "#EF4444",
      icon: Lock,
    },
    {
      id: 5,
      category: "Charity & Donations",
      percentage: 5,
      amount: "50M MANYU",
      description: "Dedicated to charitable causes and supporting animal welfare organizations worldwide.",
      color: "#8B5CF6",
      icon: Heart,
    },
  ]

  const tokenInfo = {
    name: "MANYU WIF HAT",
    symbol: "MANYU",
    totalSupply: "1,000,000,000",
    network: "Base",
    contractAddress: "Coming Soon...",
    listedOn: "Ape Store, Uniswap V3, SushiSwap",
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
        <div className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-600/30 p-10 brush-stroke rounded-xl">
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
              <p className="text-green-500 font-bold text-xl">{tokenInfo.network}</p>
            </div>
            <div className="text-center bg-black/30 p-6 rounded-lg md:col-span-2">
              <p className="text-gray-400 mb-2">Available On</p>
              <p className="text-purple-400 font-bold text-xl">{tokenInfo.listedOn}</p>
            </div>
          </div>
        </div>

        {/* Token Allocation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tokenAllocations.map((allocation) => (
            <AllocationCard key={allocation.id} allocation={allocation} />
          ))}
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
                  40% of tokens dedicated to community rewards and ecosystem growth initiatives.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Heart className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-2 text-lg">Charitable Impact</h4>
                <p className="text-gray-300">
                  5% allocated to animal welfare and charitable causes that align with our values.
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

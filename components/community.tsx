import { MessageCircle, Twitter, Users, TrendingUp } from "lucide-react"

const Community = () => {
  const socialLinks = [
    {
      name: "Telegram",
      description: "Join our main community chat",
      members: "5,000+",
      url: "https://t.me/manyuwifhat",
      icon: MessageCircle,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Twitter",
      description: "Follow for latest updates",
      members: "10,000+",
      url: "https://twitter.com/manyuwifhat",
      icon: Twitter,
      color: "from-sky-400 to-sky-500",
    },
  ]

  const communityStats = [
    {
      label: "Community Members",
      value: "15,000+",
      icon: Users,
    },
    {
      label: "Daily Active Users",
      value: "2,500+",
      icon: TrendingUp,
    },
  ]

  return (
    <section id="community" className="py-24 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-6 font-cinzel">Join Our Community</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto calligraphy leading-relaxed">
            Connect with thousands of MANYU enthusiasts, stay updated with the latest developments, and be part of the
            most engaging meme token community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="bg-black p-8 border border-blue-900/20 brush-stroke rounded-xl text-center">
                <IconComponent className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <div
                key={index}
                className="bg-black p-10 border border-blue-900/20 brush-stroke rounded-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <div className={`bg-gradient-to-r ${social.color} p-4 rounded-full inline-block mb-6`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold font-cinzel text-blue-600 mb-3">{social.name}</h3>
                  <p className="text-gray-400 mb-2">{social.description}</p>
                  <p className="text-blue-600 font-semibold mb-6">{social.members} members</p>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${social.color} text-white px-8 py-3 font-cinzel font-bold rounded-lg hover:opacity-90 transition-opacity inline-block`}
                  >
                    Join {social.name}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Community Guidelines */}
        <div className="bg-black border border-blue-900/20 p-10 brush-stroke rounded-xl">
          <h3 className="text-2xl font-bold mb-6 font-cinzel text-blue-600 text-center">Community Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-white mb-3 text-lg">Be Respectful</h4>
              <p className="text-gray-300 mb-4">
                Treat all community members with respect and maintain a positive environment for everyone.
              </p>
              <h4 className="font-bold text-white mb-3 text-lg">Stay On Topic</h4>
              <p className="text-gray-300">
                Keep discussions relevant to MANYU and the broader cryptocurrency ecosystem.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-lg">No Spam or Scams</h4>
              <p className="text-gray-300 mb-4">
                Avoid posting spam, promotional content, or suspicious links that could harm the community.
              </p>
              <h4 className="font-bold text-white mb-3 text-lg">Help Others</h4>
              <p className="text-gray-300">
                Share knowledge and help newcomers understand the MANYU ecosystem and cryptocurrency basics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community

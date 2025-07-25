import { MessageCircle, Twitter } from "lucide-react"

const Community = () => {
  const socialLinks = [
    {
      name: "Telegram",
      description: "Join our main community chat",
      url: "https://t.me/manyuwifhat",
      icon: MessageCircle,
    },
    {
      name: "Twitter",
      description: "Follow for latest updates",
      url: "https://twitter.com/manyuwifhat",
      icon: Twitter,
    },
  ]

  return (
    <section id="community" className="py-24 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-6 font-cinzel">Join Our Community</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto calligraphy leading-relaxed">
            Connect with MANYU enthusiasts, stay updated with the latest developments, and be part of the most engaging
            meme token community.
          </p>
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
                  <div className="bg-blue-600 p-4 rounded-full inline-block mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold font-cinzel text-blue-600 mb-3">{social.name}</h3>
                  <p className="text-gray-400 mb-6">{social.description}</p>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-cinzel font-bold rounded-lg transition-all duration-300 inline-block"
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

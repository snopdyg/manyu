import type React from "react"
import { Feather, Compass, Moon, Sun } from "lucide-react"

const PhilosophyCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ElementType
}) => {
  return (
    <div className="bg-black p-6 border border-blue-900/20 brush-stroke">
      <div className="flex items-center mb-4">
        <Icon className="text-blue-600 mr-3" size={24} />
        <h3 className="text-xl font-bold font-cinzel">{title}</h3>
      </div>
      <p className="text-gray-400 calligraphy">{description}</p>
    </div>
  )
}

const Philosophy = () => {
  const philosophies = [
    {
      title: "Much Zen",
      icon: Moon,
      description:
        "I approach each meme with a clear mind and pure doge energy. This allows me to see the true essence of 'wow' and create content that touches the soul.",
    },
    {
      title: "Hat Mastery",
      icon: Sun,
      description:
        "Like the perfect balance of a well-fitted beanie, I balance humor with heart, creating memes that are both entertaining and meaningful.",
    },
    {
      title: "Constant Woofing",
      icon: Feather,
      description:
        "I believe in continuous improvement of my meme game, constantly refining my expressions and perfecting the art of adorable content creation.",
    },
    {
      title: "True Doge Way",
      icon: Compass,
      description:
        "In the vast internet landscape, I maintain the authentic spirit of Shiba Inu wisdom, ensuring every meme serves the greater good of spreading joy.",
    },
  ]

  return (
    <section id="philosophy" className="py-20 bg-black relative">
      {/* Decorative ink splash */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="rgba(59, 130, 246, 0.8)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-6 font-cinzel text-center">
          My Hat Philosophy
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto calligraphy">
          Inspired by the ancient wisdom of Doge and the modern comfort of knit beanies, I apply these principles to my
          meme craft.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((philosophy) => (
            <PhilosophyCard
              key={philosophy.title}
              title={philosophy.title}
              description={philosophy.description}
              icon={philosophy.icon}
            />
          ))}
        </div>

        <div className="mt-16 p-8 border border-blue-900/20 bg-black/50 text-center">
          <blockquote className="text-xl italic text-gray-300 calligraphy">
            "Such wisdom, much hat, very philosophy. Wow."
            <footer className="text-blue-600 mt-4 font-cinzel">— Ancient Doge Proverb</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Philosophy

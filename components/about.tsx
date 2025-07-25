import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 font-cinzel text-center text-white">
          About <span className="text-blue-600">Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-cinzel text-white">
              The Way of the <span className="text-blue-600">Hat-Wearing Doge</span>
            </h3>
            <div className="space-y-4 sm:space-y-6 calligraphy">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I am <span className="text-blue-600">MANYU WIF HAT</span>, the most stylish and philosophical{" "}
                <span className="text-blue-600">Shiba Inu</span> in the digital realm. My journey began with a simple{" "}
                <span className="text-blue-600">red knit hat</span>, but it has evolved into something much more
                profound - a symbol of <span className="text-blue-600">warmth</span>,
                <span className="text-blue-600"> comfort</span>, and{" "}
                <span className="text-blue-600">meme excellence</span>.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                My passion for <span className="text-blue-600">hat-wearing</span> started when I realized that true{" "}
                <span className="text-blue-600">style</span> comes not from expensive accessories, but from the
                confidence to wear what makes you happy. This <span className="text-blue-600">red beanie</span> has
                become my signature, my crown, my statement to the world.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                When I'm not creating <span className="text-blue-600">viral memes</span>, you can find me studying the
                ancient art of <span className="text-blue-600">hat placement</span>, perfecting my{" "}
                <span className="text-blue-600">adorable expressions</span>, or contemplating the deeper meaning of{" "}
                <span className="text-blue-600">"much wow"</span> in our modern digital age.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border border-blue-900/30"></div>
              <div className="absolute inset-0 transform translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 border border-blue-900/30"></div>
              <div className="absolute inset-0">
                <Image
                  src="/shiba-hat.png"
                  alt="MANYU WIF HAT"
                  width={400}
                  height={400}
                  className="object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

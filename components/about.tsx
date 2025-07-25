import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 font-cinzel text-blue-600">The Way of the Hat-Wearing Doge</h3>
            <div className="space-y-6 calligraphy">
              <p className="text-gray-300">
                I am MANYU WIF HAT, the most stylish and philosophical Shiba Inu in the digital realm. My journey began
                with a simple red knit hat, but it has evolved into something much more profound - a symbol of warmth,
                comfort, and meme excellence.
              </p>
              <p className="text-gray-300">
                My passion for hat-wearing started when I realized that true style comes not from expensive accessories,
                but from the confidence to wear what makes you happy. This red beanie has become my signature, my crown,
                my statement to the world.
              </p>
              <p className="text-gray-300">
                When I'm not creating viral memes, you can find me studying the ancient art of hat placement, perfecting
                my adorable expressions, or contemplating the deeper meaning of "much wow" in our modern digital age.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border border-blue-900/30"></div>
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-blue-900/30"></div>
              <div className="absolute inset-0">
                <Image
                  src="/shiba-hat.png"
                  alt="MANYU WIF HAT"
                  width={400}
                  height={400}
                  className="object-cover hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Ink splash decorative element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="rgba(59, 130, 246, 0.8)"
                    d="M65.7,56.3c0,0,1.1-3.2,4.3-3.2c3.2,0,4.3,3.2,4.3,3.2s3.2-1.1,3.2-4.3c0-3.2-3.2-4.3-3.2-4.3s-1.1-3.2-4.3-3.2 c-3.2,0-4.3,3.2-4.3,3.2s-3.2,1.1-3.2,4.3C62.5,55.2,65.7,56.3,65.7,56.3z M30,60c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10 S35.5,60,30,60z M70,20c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S75.5,20,70,20z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

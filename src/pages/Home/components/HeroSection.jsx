"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section className="min-h-screen relative overflow-hidden bg-transparent ">
      {/* Dark gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0"></div> */}

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:50px_50px] opacity-5 z-0"></div>

      {/* Large profile image as background element */}
      <motion.div
        style={{ y: imageY }}
        className="absolute top-0 right-0 bottom-0 w-3/4 md:w-2/3 lg:w-3/5 z-0 overflow-hidden"
      >
        {/* Gradient overlays for the image */}
        {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-70 z-10"></div> */}

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="h-full w-full"
        >
          <img
            src="/images/newpropic.png"
            alt="EL MOUSSAOUI MOHAMMED"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Decorative elements */}
        {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div> */}
      </motion.div>

      {/* Content container */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-2xl">
            {/* Text content */}
            <motion.div style={{ y }} className="relative z-20">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-purple-200 bg-clip-text text-transparent font-mono leading-tight"
              >
                EL MOUSSAOUI
                <br />
                MOHAMMED
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-mono max-w-lg"
              >
                Talk less, Build more
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-8 h-8 text-purple-300 animate-bounce" />
      </motion.div>
    </section>
  );
}

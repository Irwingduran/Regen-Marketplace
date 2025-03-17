"use client"; 
import { motion } from "framer-motion";

import React from 'react'
import { Button } from "./ui/button";

const UnderDevelopment = () => {
  return (
<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
  <div className="text-center">
    {/* Icono animado */}
    <motion.div
      initial={{ scale: 0.8, rotate: -10 }}
      animate={{ scale: 1, rotate: 10 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className="text-8xl mb-8"
    >
      🛠️
    </motion.div>

    {/* Título */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
    >
      We are working on it!
    </motion.h1>

    {/* Descripción */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-600 text-lg mb-8"
    >
      This section is currently under development. Soon you will have access to amazing new features, stay tuned!

    </motion.p>

    {/* Botón para volver al inicio */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <a href="/">
      <Button
        className="inline-block bg-colorPrimary text-white px-6 py-3 rounded-xl font-semibold hover:bg-accentPrimary transition-colors items-center"
      >
        Back
      </Button></a>
    </motion.div>
  </div>
</section>
  )
}

export default UnderDevelopment
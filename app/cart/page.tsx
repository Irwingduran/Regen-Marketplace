"use client"; // Asegúrate de que este componente se ejecute en el cliente

import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CartSection() {
  return (
    <>
    <Menu/>
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          Your Cart
        </motion.h2>

        {/* Content */}
        <div className="max-w-2xl mx-auto text-center">
          {/* Menssage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="text-6xl mb-6">🛒</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Explain your cart
            </h3>
            <p className="text-gray-600 mb-6">
            Here you can view and manage the products you have added to your cart.
            Don&apos;t miss the incredible offers we have for you!
            </p>
            <Link href="/auth/login">
              <Button className="bg-colorPrimary text-white px-6 py-3 rounded-xl hover:bg-accentPrimary transition duration-300">Log In</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
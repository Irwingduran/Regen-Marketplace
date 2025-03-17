"use client";
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";


const Home = () => {

  const categories = [
    {
      title: "Quick Start",
      description: "Learn how to set up and use our platform in minutes.",
      link: "/developing",
      icon: "🚀",
    },
    {
      title: "API",
      description: "Detailed API documentation for developers.",
      link: "/developing",
      icon: "📚",
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides to master all features.",
      link: "/developing",
      icon: "🎓",
    },
    {
      title: "FAQ",
      description: "Answers to our users' most common questions.",
      link: "/developing",
      icon: "❓",
    },
    {
      title: "Changelog",
      description: "Stay up to date with the latest updates and improvements.",
      link: "/developing",
      icon: "📜",
    },
    {
      title: "Support",
      description: "Contact our support team for personalized help.",
      link: "/developing",
      icon: "🛠️",
    },
  ];

return (
<> 
  <div>
      <Navbar/>
      <div className="bg-gradient-to-b from-blue-40/90 to-blue-100/90 flex flex-col items-center justify-center  overflow-hidden">
        <Image
          src="/img/backgroundimg321.png"
          alt="Background"
          fill
          className="object-cover -z-10 opacity-90"
          priority
          quality={100}
          
        />
        
        <section className="flex flex-col items-center justify-center h-[calc(100vh-64px)] px-4">
          <h1 className="text-5xl font-bold text-black text-center mb-6">
            Discover New<br />
            Regenerative Ways To<br />
            Build Your Life
          </h1>
          <Link href="/home">
            <Button className="bg-colorPrimary text-white px-6 py-3 rounded-xl hover:bg-accentPrimary transition duration-300">
              Currently Mobile Only
            </Button>
          </Link>
        </section>
      </div>

       <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id='about'>
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          About Us
        </motion.h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/img/about-image.png" 
              alt="about us"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Title
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, adipisci cum sed magnam dolorum officiis qui error modi accusantium obcaecati quod. Vel sunt mollitia consequuntur reprehenderit saepe est sequi dolor!
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae earum, dicta recusandae assumenda temporibus hic molestiae ipsa repellat ad eum sit ut neque eveniet minus dolor alias iste ratione eligendi.
            </p>

            {/* List */}
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">point one</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">point two</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">point three</span>
              </li>
            </ul>

            {/* Button */}
            <Link href="https://urbanika.xyz" target='_blank'>
            <Button
              className="mt-6 bg-colorPrimary text-white px-6 py-3 rounded-xl font-semibold hover:bg-accentPrimary transition-colors"
            >
              Learn more
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id='docs'>
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          Documentación
        </motion.h2>

        {/* Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link
                href={category.link}
                className="text-colorPrimary font-semibold hover:text-accentPrimary transition-colors"
              >
                Ver más →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <Footer/>
    </div>
    </>
  );
};

export default Home;
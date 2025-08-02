import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Settings,
  Mail,
  Phone,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ChevronRight,
  Rocket,
  Code,
  Server,
  Shield,
  Smartphone,
  Database,
  Cloud,
  BarChart2,
  Zap,
  Check,
  Users,
  Award,
  Clock,
  HelpCircle,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Layers,
  Terminal,
  Figma,
  GitBranch,
  ShieldCheck,
  MousePointerClick,
  Quote,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote:
        "TechNova's AI solutions increased our operational efficiency by 240%. Their team delivered beyond our expectations.",
      name: "Sarah Johnson",
      role: "CEO, BlueWave Inc.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "The blockchain platform they developed revolutionized our supply chain. Customer satisfaction is at an all-time high!",
      name: "Michael Chen",
      role: "CTO, GreenTech Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "Their cloud migration strategy saved us $1.2M annually. TechNova is our trusted technology partner.",
      name: "David Wilson",
      role: "Director, RedStone Ltd.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI & Machine Learning",
      desc: "Transform your business with cutting-edge AI solutions.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Blockchain Development",
      desc: "Secure, decentralized solutions for the modern enterprise.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "IoT Solutions",
      desc: "Connect your physical and digital worlds seamlessly.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Figma className="h-8 w-8" />,
      title: "UX/UI Design",
      desc: "Beautiful interfaces that drive engagement and conversions.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "DevOps & Automation",
      desc: "Streamline your development and deployment pipelines.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Cyber Security",
      desc: "Protect your assets with enterprise-grade security.",
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: -100, y: -100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          initial={{ x: 100, y: 100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className={`absolute w-2 h-2 rounded-full ${
              ["bg-indigo-300", "bg-purple-300", "bg-pink-300"][i % 3]
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Header with Glass Morphism Effect */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 ${
          isScrolled
            ? "backdrop-blur-md bg-white/80 shadow-sm"
            : "backdrop-blur-none bg-transparent"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-800">
                TechNova
              </span>
            </motion.div>

            <nav className="hidden lg:flex space-x-8">
              {[
                { name: "Home", icon: <Home className="h-5 w-5 mr-2" /> },
                { name: "About", icon: <User className="h-5 w-5 mr-2" /> },
                {
                  name: "Services",
                  icon: <Settings className="h-5 w-5 mr-2" />,
                },
                { name: "Work", icon: <Code className="h-5 w-5 mr-2" /> },
                { name: "Contact", icon: <Mail className="h-5 w-5 mr-2" /> },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.name.toLowerCase()}`}
                  className={`flex items-center px-3 py-2 rounded-lg ${
                    index === 0
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <motion.button
              className="lg:hidden focus:outline-none"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 text-gray-800" />
              ) : (
                <Menu className="h-8 w-8 text-gray-800" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-20 bg-white lg:hidden"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {[
                  { name: "Home", icon: <Home className="h-5 w-5 mr-2" /> },
                  { name: "About", icon: <User className="h-5 w-5 mr-2" /> },
                  {
                    name: "Services",
                    icon: <Settings className="h-5 w-5 mr-2" />,
                  },
                  { name: "Work", icon: <Code className="h-5 w-5 mr-2" /> },
                  { name: "Contact", icon: <Mail className="h-5 w-5 mr-2" /> },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.name.toLowerCase()}`}
                    className="flex items-center px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100"
                    whileHover={{ x: 5 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-2 text-lg font-medium">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with 3D Parallax Effect */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90" />
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center opacity-20"
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Innovating the Future
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100">
                    Digital Transformation
                  </span>{" "}
                  <br />
                  <span className="text-white">For Your Business</span>
                </h1>
                <p className="text-xl text-indigo-100 mb-8 max-w-lg">
                  We deliver cutting-edge technology solutions powered by AI,
                  blockchain, and cloud computing to future-proof your business.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    className="flex items-center justify-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition duration-300"
                    whileHover={{
                      y: -2,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition duration-300"
                    whileHover={{
                      y: -2,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Solutions <HelpCircle className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Digital Transformation"
                    className="rounded-2xl shadow-2xl border-8 border-white/20"
                  />
                  <motion.div
                    className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <div className="flex items-center">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <MousePointerClick className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-800">
                          Interactive Demo
                        </h4>
                        <p className="text-sm text-gray-600">
                          See our platform in action
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-white rounded-full mt-2"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {["Google", "Microsoft", "Amazon", "Netflix", "Uber", "Airbnb"].map(
              (client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  {client}
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Cutting-Edge Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital transformation services to help
              your business thrive in the modern landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.desc}</p>
                <motion.a
                  href="#"
                  className="text-indigo-600 font-medium flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Animated Tabs */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
                  About Us
                </span>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Pioneering Digital Innovation Since 2015
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  TechNova was founded with a vision to bridge the gap between
                  emerging technologies and business needs.
                </p>

                <div className="mb-8">
                  {["Mission", "Vision", "Values", "Team"].map((tab, index) => (
                    <button
                      key={index}
                      className={`px-6 py-3 mr-4 rounded-lg font-medium ${
                        index === 0
                          ? "bg-indigo-600 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <p className="text-gray-600 mb-8">
                  Our team of 50+ experts across 3 continents brings diverse
                  perspectives and deep technical expertise to every project.
                </p>

                <motion.button
                  className="flex items-center px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Meet Our Team <Users className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Our Team"
                  className="rounded-2xl shadow-xl"
                />
                <motion.div
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">Award Winning</h4>
                      <p className="text-sm text-gray-600">
                        25+ Industry Awards
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <Users className="h-10 w-10 mx-auto" />,
                number: 150,
                suffix: "+",
                label: "Clients",
              },
              {
                icon: <Award className="h-10 w-10 mx-auto" />,
                number: 25,
                suffix: "+",
                label: "Awards",
              },
              {
                icon: <Code className="h-10 w-10 mx-auto" />,
                number: 300,
                suffix: "+",
                label: "Projects",
              },
              {
                icon: <Clock className="h-10 w-10 mx-auto" />,
                number: 99,
                suffix: "%",
                label: "Uptime",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="flex justify-center">{stat.icon}</div>
                <motion.h3
                  className="text-5xl font-bold mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Counter from={0} to={stat.number} />
                  {stat.suffix}
                </motion.h3>
                <p className="text-indigo-100 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Auto-Sliding */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </motion.div>

          <div className="relative h-96">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  activeTestimonial === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-white p-10 rounded-3xl shadow-lg max-w-3xl mx-auto relative">
                        <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                          <Quote className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-2xl text-gray-700 italic mb-8">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mr-6"
                          />
                          <div>
                            <h4 className="font-bold text-gray-800 text-xl">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  activeTestimonial === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax Effect */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2340&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your technology goals
              with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="flex items-center justify-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition duration-300"
                whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                className="flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition duration-300"
                whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us <Phone className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
                  Contact Us
                </span>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Have a project in mind or want to learn more about our
                  services? Reach out to our team.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">info@technova.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        123 Tech Street, Silicon Valley, CA 94000
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: <Facebook className="h-5 w-5" />,
                        name: "Facebook",
                      },
                      {
                        icon: <Twitter className="h-5 w-5" />,
                        name: "Twitter",
                      },
                      {
                        icon: <Linkedin className="h-5 w-5" />,
                        name: "LinkedIn",
                      },
                      {
                        icon: <Instagram className="h-5 w-5" />,
                        name: "Instagram",
                      },
                      { icon: <Github className="h-5 w-5" />, name: "GitHub" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition duration-300"
                        aria-label={social.name}
                        whileHover={{ y: -3 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 rounded-2xl shadow-sm"
              >
                <form>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
                    whileHover={{
                      y: -2,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <Mail className="ml-2 h-5 w-5" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center mb-6"
              >
                <Rocket className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-2xl font-bold">TechNova</span>
              </motion.div>
              <p className="text-gray-400 mb-6">
                Innovating the future with cutting-edge technology solutions for
                businesses worldwide.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, name: "Facebook" },
                  { icon: <Twitter className="h-5 w-5" />, name: "Twitter" },
                  { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn" },
                  {
                    icon: <Instagram className="h-5 w-5" />,
                    name: "Instagram",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition duration-300"
                    aria-label={social.name}
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Portfolio",
                  "Blog",
                  "Contact",
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "AI Solutions",
                  "Blockchain Development",
                  "Cloud Computing",
                  "Cybersecurity",
                  "Data Analytics",
                  "IoT Solutions",
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-5 py-3 w-full rounded-l-lg focus:outline-none text-gray-800"
                />
                <motion.button
                  type="submit"
                  className="bg-indigo-600 px-5 py-3 rounded-r-lg hover:bg-indigo-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} TechNova. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookies Policy",
                "Sitemap",
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Counter component for animated numbers
const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * (to - from) + from);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [from, to]);

  return <>{count}</>;
};

export default App;

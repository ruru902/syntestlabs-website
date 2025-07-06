import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  Smartphone, 
  ChevronDown,
  Mail,
  MapPin,
  Play,
  CheckCircle,
  ArrowRight,
  Microscope,
  Users,
  Lock,
  Activity
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Spline from '@splinetool/react-spline';
import confetti from 'canvas-confetti';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // In a real app, you'd send this to your backend
      console.log('Email submitted:', email);
      
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const explainerSlides = [
    {
      title: "Every 6 minutes, someone in the U.S. is diagnosed with Parkinson's",
      description: "But diagnosis often comes too late, when 80% of dopamine neurons are already lost.",
      icon: <Activity className="w-16 h-16 text-[#b996dd]" />
    },
    {
      title: "Existing tests rely on invasive or late-stage tools",
      description: "Spinal fluid taps, expensive MRIs, and subjective clinical assessments.",
      icon: <Microscope className="w-16 h-16 text-[#a2e8f4]" />
    },
    {
      title: "Our solution: A nanoenzyme-based colorimetric test strip",
      description: "Powered by saliva, gold nanoparticles, and cutting-edge biomarker detection.",
      icon: <Zap className="w-16 h-16 text-[#00BFFF]" />
    },
    {
      title: "Scan with an app. Detect early. Take control.",
      description: "AI-powered analysis delivers clinically validated results in minutes.",
      icon: <Brain className="w-16 h-16 text-[#b996dd]" />
    }
  ];

  const workSteps = [
    {
      step: "01",
      title: "Collect Saliva",
      description: "Simple saliva collection with our specialized test strip",
      icon: <div className="w-12 h-12 bg-gradient-to-br from-[#b996dd] to-[#a2e8f4] rounded-full flex items-center justify-center text-white font-bold">1</div>
    },
    {
      step: "02", 
      title: "Nanoparticle Reaction",
      description: "Gold nanoparticle aggregation triggered by Cu²⁺ biomarkers",
      icon: <div className="w-12 h-12 bg-gradient-to-br from-[#a2e8f4] to-[#00BFFF] rounded-full flex items-center justify-center text-white font-bold">2</div>
    },
    {
      step: "03",
      title: "AI-Powered Scan",
      description: "Scan strip with our computer vision app for instant analysis",
      icon: <div className="w-12 h-12 bg-gradient-to-br from-[#00BFFF] to-[#b996dd] rounded-full flex items-center justify-center text-white font-bold">3</div>
    },
    {
      step: "04",
      title: "Secure Results",
      description: "Instant, encrypted report with clinical-grade validation",
      icon: <div className="w-12 h-12 bg-gradient-to-br from-[#b996dd] to-[#a2e8f4] rounded-full flex items-center justify-center text-white font-bold">4</div>
    }
  ];

  const features = [
    {
      title: "Nanoparticle Science",
      description: "LSPR-enhanced multiplex testing with Cu²⁺-induced gold nanoparticle aggregation",
      icon: <Microscope className="w-8 h-8 text-[#b996dd]" />,
      angle: 0
    },
    {
      title: "AI-Enhanced App",
      description: "Clinical-grade computer vision delivers instant, accurate results",
      icon: <Brain className="w-8 h-8 text-[#a2e8f4]" />,
      angle: 60
    },
    {
      title: "FDA-Pending Safety",
      description: "Physician-prescribed and backed by UC Irvine clinicians",
      icon: <Shield className="w-8 h-8 text-[#00BFFF]" />,
      angle: 120
    },
    {
      title: "Saliva-Based Simplicity",
      description: "Non-invasive and frictionless—no more MRIs or CSF tests",
      icon: <CheckCircle className="w-8 h-8 text-[#b996dd]" />,
      angle: 180
    },
    {
      title: "Built for Access",
      description: "Designed to make Parkinson's testing simple and comfortable",
      icon: <Users className="w-8 h-8 text-[#a2e8f4]" />,
      angle: 240
    },
    {
      title: "Data You Control",
      description: "All results are encrypted, private, and shareable with your physician",
      icon: <Lock className="w-8 h-8 text-[#00BFFF]" />,
      angle: 300
    }
  ];

  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [explainerRef, explainerInView] = useInView({ threshold: 0.3 });
  const [worksRef, worksInView] = useInView({ threshold: 0.3 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Pattern */}
      <motion.div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#b996dd]/20 via-transparent to-[#a2e8f4]/20"></div>
      </motion.div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="syn_test_icon.png" alt="SynTest Logo" className="w-80 h-80 object-contain" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#b996dd] to-[#a2e8f4] bg-clip-text text-transparent">
                SynTest Labs
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
        {/* Spline Brain Background */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 opacity-100 pointer-events-none">
          <div className="w-full max-w-2xl h-full">
            <Spline scene="https://prod.spline.design/Ikm87wzLZK9UVmer/scene.splinecode" />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Early Parkinson's Detection{' '}
                <span className="bg-gradient-to-r from-[#b996dd] to-[#a2e8f4] bg-clip-text text-transparent">
                  From a Drop of Saliva
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                SynTest Labs is revolutionizing Parkinson's diagnostics with a saliva test that uses 
                nanoenzyme-enhanced colorimetric sensors and AI-powered app analysis to identify 
                Parkinson's biomarkers — simply, safely, and non-invasively.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#b996dd] to-[#a2e8f4] hover:from-[#a885cc] hover:to-[#91d7e3] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(185, 150, 221, 0.6)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Waitlist
              </motion.button>
              <motion.button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 191, 255, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Empty space for brain to show through */}
          <div className="hidden lg:block"></div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-[#00BFFF]" />
        </div>
      </section>

      {/* Pinned Explainer Scroll */}
      <section ref={explainerRef} className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={explainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">The Diagnostic Gap</h2>
            <p className="text-xl text-gray-300">Understanding why early detection matters</p>
          </motion.div>

          <div className="space-y-16">
            {explainerSlides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={explainerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-900/50 rounded-2xl border border-gray-700 backdrop-blur-sm"
              >
                <motion.div 
                  className="flex-shrink-0"
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {slide.icon}
                </motion.div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-lg text-gray-300">{slide.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={explainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button 
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#00BFFF] to-[#b996dd] hover:from-[#0099cc] hover:to-[#a885cc] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 191, 255, 0.6)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Reserve Your SynTest Kit
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* How SynTest Works */}
      <section id="how-it-works" ref={worksRef} className="relative py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={worksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How SynTest Works</h2>
            <p className="text-xl text-gray-300">Four simple steps to early detection</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={worksInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative p-6 bg-gray-900/50 rounded-2xl border border-gray-700 backdrop-blur-sm text-center hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(185, 150, 221, 0.2)"
                }}
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(185, 150, 221, 0)",
                      "0 0 15px rgba(185, 150, 221, 0.4)",
                      "0 0 0px rgba(185, 150, 221, 0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {step.icon}
                </motion.div>
                <div className="text-sm text-[#00BFFF] font-semibold mb-2">STEP {step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < workSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#00BFFF]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Why SynTest Is Different */}
<section id="features" ref={featuresRef} className="relative py-20 bg-black">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={featuresInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4">Why SynTest Is Different</h2>
      <p className="text-xl text-gray-300">Revolutionary technology meets clinical precision</p>
    </motion.div>

    <div className="relative h-[900px] flex items-center justify-center">
      <div className="relative w-[900px] h-[900px] mx-auto" style={{ marginLeft: '-60px' }}>
        
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 900" style={{ marginLeft: '120px' }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b996dd" />
              <stop offset="100%" stopColor="#a2e8f4" />
            </linearGradient>
          </defs>
          {features.map((feature, index) => {
            const radius = 320;
            const angleRad = (feature.angle * Math.PI) / 180;
            const x2 = 450 + Math.cos(angleRad) * radius;
            const y2 = 500 + Math.sin(angleRad) * radius; // Moved down by 30px

            return (
              <motion.line
                key={index}
                x1="450"
                y1="500" // Moved down by 30px
                x2={x2}
                y2={y2}
                stroke="url(#gradient)"
                strokeWidth="2"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={featuresInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            );
          })}
        </svg>

        {/* Central Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 top-1/2 w-56 h-56 bg-gradient-to-br from-[#b996dd] to-[#a2e8f4] rounded-full flex items-center justify-center shadow-2xl transform -translate-x-1/2 -translate-y-1/2"
          style={{
            boxShadow: '0 0 80px rgba(185, 150, 221, 0.5), 0 0 160px rgba(162, 232, 244, 0.3)',
            marginLeft: '20px',
            marginTop: '30px' // Moved down by 30px
          }}
        >
        <img
          src="syn_test_icon.png"
          alt="SynTest Logo"
          className="w-100 h-100 object-contain"
        />

        </motion.div>

        {/* Feature Cards */}
        {features.map((feature, index) => {
          const radius = 360;
          const angleRad = (feature.angle * Math.PI) / 180;
          const x = 450 + Math.cos(angleRad) * radius;
          const y = 450 + Math.sin(angleRad) * radius; // Moved down by 30px

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="absolute w-80 p-6 bg-gray-900/90 rounded-2xl border border-gray-700 backdrop-blur-sm hover:bg-gray-800/90 transition-all duration-300 cursor-pointer"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 30px rgba(185, 150, 221, 0.2)'
              }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(185, 150, 221, 0.4)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="p-2 bg-gradient-to-br from-[#b996dd]/20 to-[#a2e8f4]/20 rounded-lg"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>


      {/* Final CTA */}
      <section id="waitlist" className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Transforming Neurological Care{' '}
              <span className="bg-gradient-to-r from-[#b996dd] to-[#a2e8f4] bg-clip-text text-transparent">
                Starts With You
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Be among the first to use a revolutionary at-home Parkinson's test — 
              empowering early detection through science you can trust.
            </p>

            <div className="bg-gray-900/50 rounded-2xl border border-gray-700 backdrop-blur-sm p-8 max-w-md mx-auto">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4"
                >
                  <CheckCircle className="w-16 h-16 text-[#00BFFF] mx-auto" />
                  <h3 className="text-2xl font-bold text-[#00BFFF]">Welcome to the Future!</h3>
                  <p className="text-gray-300">We'll keep you updated on our progress.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b996dd] focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#b996dd] to-[#a2e8f4] hover:from-[#a885cc] hover:to-[#91d7e3] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 10px 30px rgba(185, 150, 221, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      y: [0, -2, 0]
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    Join the Waitlist
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="syn_test_icon.png" alt="SynTest Logo" className="w-80 h-80 object-contain" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#b996dd] to-[#a2e8f4] bg-clip-text text-transparent">
                  SynTest Labs
                </h3>
              </div>
              <p className="text-gray-400">
                Revolutionizing Parkinson's diagnostics through nanotechnology and AI.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:founders@syntestlabs.com" className="hover:text-white transition-colors">
                    founders@syntestlabs.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Pasadena, CA</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-gray-400">
                <p className="text-sm">
                  FDA-pending diagnostic test. Not yet available for commercial use.
                </p>
                <p className="text-sm">
                  © 2025 SynTest Labs. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
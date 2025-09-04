import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Globe, DollarSign, BookOpen } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';
import ArtisanCard from '../components/common/ArtisanCard';
import ArtifactCard from '../components/common/ArtifactCard';
import ImpactCard from '../components/common/ImpactCard';
// Update the import to match the actual exports from mockData
import { artisans, artifacts, impactMetrics } from '../data/mockData';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import bgtra from '/src/assets/bgtra.png';
import logo from '/src/assets/logo.png'; // Update the path to your logo image

// --- Navbar Component ---
const Navbar: React.FC = () => (
  <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">

    <Link to="/" className=" flex items-center">
      <img 
        src={logo} 
        alt="Heritage Platform Logo" 
        className="h-10 w-10 mr-2 rounded-full" 
      />
      <span className='font-display font-semibold text-lg'>
        Tradiverse
      </span>
    </Link>
    <div className="flex gap-4">
      <Link
        to="/signin"
        className="px-4 py-2 rounded-md text-primary-700 font-medium hover:bg-primary-100 transition"
      >
        Sign In
      </Link>
      <Link
        to="/signup"
        className="px-4 py-2 rounded-md bg-primary-700 text-white font-medium hover:bg-primary-800 transition"
      >
        Sign Up
      </Link>
       <Link
        to="/about"
        className="px-4 py-2 rounded-md text-primary-700 font-medium hover:bg-primary-100 transition"
      >
        About Us
      </Link>
    </div>
  </nav>
);
// --- End Navbar ---

// Slowly rotating Model component
function Model() {
  const gltf = useGLTF('./a_playful_boy_with_an_0521055401_texture.glb');
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (ref.current && hovered) {
      ref.current.rotation.y += 0.02; // Faster rotation on hover
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={3}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      style={{ cursor: hovered ? 'pointer' : 'default' }}
    />
  );
}



const HomePage: React.FC = () => {
  const featuredArtisans = artisans.filter(artisan => artisan.featured).slice(0, 3);
  const featuredArtifacts = artifacts.slice(0, 3);
  const topMetrics = impactMetrics.slice(0, 4);
  
  return (
    <div>
      <Navbar /> {/* Add the navbar here */}

      {/* Hero + 3D Model Side by Side with shared background */}
      
        <div className="flex-1 min-w-full max-w-xxl mb-8 md:mb-0 md:mr-12 rounded-lg ">
          <HeroSection
            title={
              <>
                Preserving Culture Through Technology
                <span className="block underline text-xl font-large text-primary-200 hover:text-red-700 mt-2">
                  by Ethoverse
                </span>
              </>
            }
            subtitle="Connect with artisans from around the world, explore authentic cultural artifacts, and help preserve traditional heritage."
            imageUrl={bgtra}
            ctaText="Explore Marketplace"
            ctaLink="/marketplace"
          />
        </div>
        
    
      
      {/* Mission Statement */}
      <section className="py-16 bg-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              We're building a platform where traditional artisans can share their craft with the world, 
              receive fair compensation, and ensure their cultural knowledge is preserved for future generations.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Learn more about our story
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-800 text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center bg-primary-400 hover:bg-primary-500 p-5 rounded-lg"
            >
              <div className="bg-primary-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Shield size={28} className="text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Authentic Verification
              </h3>
              <p className="text-neutral-600">
                Each artifact is authenticated using blockchain technology to verify its origin and creator.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center  bg-primary-400 hover:bg-primary-500 p-5 rounded-lg"
            >
              <div className="bg-primary-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Globe size={28} className="text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Global Connection
              </h3>
              <p className="text-neutral-600">
                Connect directly with artisans from indigenous and traditional communities worldwide.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-primary-400 hover:bg-primary-500 p-5 rounded-lg"
            >
              <div className="bg-primary-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <DollarSign size={28} className="text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Fair Compensation
              </h3>
              <p className="text-neutral-600">
                Smart contracts ensure artisans receive fair payment for their work and ongoing royalties.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center bg-primary-400 hover:bg-primary-500 p-5 rounded-lg"
            >
              <div className="bg-primary-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <BookOpen size={28} className="text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Cultural Preservation
              </h3>
              <p className="text-neutral-600">
                Digitally document and preserve cultural knowledge, traditions, and craftsmanship techniques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
  
      
      {/* Featured Artifacts */}
      <section className="py-16 bg-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-3xl font-display font-bold text-primary-800">
              Featured Artifacts
            </h2>
            <Link to="/marketplace" className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center">
              View all
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtifacts.map((artifact) => (
              <ArtifactCard key={artifact.id} artifact={artifact} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-neutral-100">
              Every purchase supports traditional artisans and helps preserve cultural heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topMetrics.map((metric, index) => (
              <ImpactCard key={index} metric={metric} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/impact" className="inline-block bg-white text-primary-700 hover:bg-neutral-100 font-medium py-3 px-8 rounded-md shadow-md transition-colors">
              View Impact Dashboard
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-200 to-neutral-400 text-grey-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-neutral-900 max-w-3xl mx-auto mb-8">
            Whether you're an artisan looking to share your craft, or someone passionate about preserving cultural heritage, there's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="bg-white text-primary-700 hover:bg-neutral-50 font-medium py-3 px-8 rounded-md shadow-md transition-colors min-w-[200px]">
              Join as Artisan
            </Link>
            <Link to="/signup" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md shadow-md transition-colors min-w-[200px]">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
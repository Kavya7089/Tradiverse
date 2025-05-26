import React from 'react';
import beu from '/src/assets/3dbeu.png'; // Replace with your image path

import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import mahi from '/src/assets/mahi.png';
import nishkarsh from '/src/assets/nishakarsh.png';
import kavya from '/src/assets/kavya.png';  
import renam from '/src/assets/renam.png';
import aryan from '/src/assets/aryan.png';

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

const mates = [
  {
    name: 'Kavya Rajoria',
    role: 'Tech Lead, Developer',
    img: {kavya},
  },
  {
    name: 'Nishkarsh Gupta',
    role: ' Cultural Content Curator',
    img: {nishkarsh},
  },
  {
    name: 'Mahi Shriwastava',
    role: 'Community Engagement',
    img: {mahi}   ,
  },
  {
    name: 'Aryan Tiwari',
    role: 'Hardware Expert',
    img: {aryan}   ,
  },
  {
    name: 'Renam Chourasia',
    role: 'UI/UX Designer',
    img: {renam},
  },

];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-0">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-72 flex items-center justify-center bg-primary-600"
        
        aria-label="Cultural Heritage"
      >
        <div className="absolute inset-0 bg-primary-900 opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg">About Us</h1>
          <p className="text-xl font-medium drop-shadow">
            Celebrating Culture. Empowering Artisans. Connecting the World.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className='flex'
       style={{
          backgroundImage: `URL(${beu})`,
          backgroundSize: 'cover',
          backgroundPosition: 'fixed center',
          backgroundRepeat: 'no-repeat',
        }}>

      
      <div className="max-w-5xl mx-auto my-20 px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-lg shadow-lg bg-opacity-70">
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Mission</h2>
          <p className="text-lg text-neutral-700 mb-6">
            <strong>Welcome to our platform!</strong> A Metaverse platform for ethical cultural  preservation and empowerment. 
            <strong> Tradiverse</strong>, where we believe in the power of culture, community, and craftsmanship.
          </p>
          <p className="text-lg text-neutral-700 mb-6">
           We are dedicated to preserving and celebrating the world’s diverse cultural heritage by connecting you with authentic artisans and their unique creations.
          </p>
          <p className="text-neutral-700 mb-6">
            Our mission is to empower artisans from around the globe, provide them with a digital marketplace, and help keep traditional crafts alive. By bridging the gap between artisans and enthusiasts, we foster appreciation, understanding, and support for cultural diversity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary-700 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-neutral-700 mb-6 space-y-1">
            <li>Artisan Profiles & Cultural Storytelling (AI/ML + Media Uploads)</li>
            <li>NFT-based Authenticity & Ownership (Blockchain)</li>
            <li>Fair Trade Digital Marketplace (Decentralized + Fiat Payment Options).</li>
            <li> Cultural Knowledge Vault (IP Protection + Access Control).</li>
            <li>Reciprocation & Visibility Dashboard (Impact Analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary-700 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-neutral-700 mb-6 space-y-1">
            <li>Curated selection of verified artisans and genuine products.</li>
            <li>Transparent and ethical platform supporting fair trade.</li>
            <li>Educational resources to deepen your cultural understanding.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary-700 mb-4">Meet the Team</h2>
          <div className="flex flex-wrap  gap-8 mb-10 justify-center">
            {mates.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-60"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mb-2 object-cover"
                />
                <span className="font-bold text-primary-800">{member.name}</span>
                <span className="text-sm text-neutral-600">{member.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary-50 rounded-lg p-6 text-center mt-8">
          <h3 className="text-xl font-semibold text-primary-800 mb-2">
            Join Our Community
          </h3>
          <p className="text-neutral-700 mb-4">
            Become part of a global movement to celebrate and sustain the world’s cultural treasures.
          </p>
          <a
            href="/signup"
            className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-2 rounded transition"
          >
            Get Started
          </a>
        </section>

        <p className="text-neutral-700 mt-10 text-center">
          Thank you for joining us on this journey to celebrate and sustain the world’s cultural treasures. Together, we can make a difference—one artifact, one artisan, and one story at a time.
        </p>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;
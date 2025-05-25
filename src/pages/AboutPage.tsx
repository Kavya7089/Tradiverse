import React from 'react';

// Sample team data (replace with real data or fetch dynamically)
const team = [
  {
    name: 'Aisha Khan',
    role: 'Founder & CEO',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Miguel Santos',
    role: 'Head of Partnerships',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Lina Zhang',
    role: 'Lead Designer',
    img: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-0">
      {/* Hero Section */}
      <section
        className="relative h-72 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Mission</h2>
          <p className="text-lg text-neutral-700 mb-6">
            <strong>Welcome to our platform!</strong> We are dedicated to preserving and celebrating the world’s diverse cultural heritage by connecting you with authentic artisans and their unique creations.
          </p>
          <p className="text-neutral-700 mb-6">
            Our mission is to empower artisans from around the globe, provide them with a digital marketplace, and help keep traditional crafts alive. By bridging the gap between artisans and enthusiasts, we foster appreciation, understanding, and support for cultural diversity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary-700 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-neutral-700 mb-6 space-y-1">
            <li>Discover authentic, handcrafted artifacts and artworks.</li>
            <li>Learn about the stories, cultures, and techniques behind each creation.</li>
            <li>Support artisans directly and contribute to the preservation of traditional skills.</li>
            <li>Engage with a global community passionate about culture and creativity.</li>
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
          <div className="flex flex-wrap gap-6 mb-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-40"
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
  );
};

export default AboutPage;
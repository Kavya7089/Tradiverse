import React from 'react';
import { motion } from 'framer-motion';
import ImpactCard from '../components/common/ImpactCard';
import { impactMetrics } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const impactData = [
  { name: 'Artisans', value: 187 },
  { name: 'Artifacts', value: 420 },
  { name: 'Communities', value: 36 },
  { name: 'Workshops', value: 52 },
  { name: 'Stories Shared', value: 110 }
];

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const impactLocations = [
  { name: "Hawaii", coordinates: [-155.5828, 19.8968], count: 30 },
  { name: "Yucatan", coordinates: [-89.0706, 20.7099], count: 50 },
  { name: "Enugu", coordinates: [7.5086, 6.5244], count: 15 },
  { name: "Bihar", coordinates: [85.3131, 25.0961], count: 22 },
  { name: "Venice", coordinates: [12.3155, 45.4408], count: 10 },
  { name: "Tokyo", coordinates: [139.6917, 35.6895], count: 18 },
  { name: "Puebla", coordinates: [-98.2063, 19.0414], count: 12 },
  { name: "Wellington", coordinates: [174.7762, -41.2865], count: 8 }
];

const ImpactDashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-700 pt-16">
      <div className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Impact Dashboard
          </h1>
          <p className="text-lg text-neutral-100 mb-8 max-w-3xl">
            Track the real-world impact of our platform on cultural preservation, artisan livelihoods, and community development.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactMetrics.map((metric, index) => (
            <ImpactCard key={index} metric={metric} index={index} />
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-medium p-6 mb-12">
          <h2 className="text-2xl font-display font-bold text-primary-800 mb-6">
            Community Impact Visualization
          </h2>
          <div className="h-[400px] w-full bg-primary-200 rounded-lg flex items-center justify-center">
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={impactData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Impact Stories */}
          <div className="bg-white rounded-lg shadow-medium p-6">
            <h2 className="text-xl font-display font-bold text-primary-800 mb-4">
              Impact Stories
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <h3 className="font-semibold text-neutral-800">Reviving Hawaiian Kapa Making</h3>
                <p className="text-sm text-neutral-600 mt-1">
                  Through the platform, Malia has been able to teach her traditional kapa making techniques to over 30 new apprentices, ensuring this ancient craft continues for generations.
                </p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <h3 className="font-semibold text-neutral-800">Preserving Mayan Wood Carving</h3>
                <p className="text-sm text-neutral-600 mt-1">
                  Carlos has documented over 50 traditional Mayan carving techniques that were at risk of being lost, creating a digital archive for future artisans.
                </p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <h3 className="font-semibold text-neutral-800">Economic Revival in Enugu</h3>
                <p className="text-sm text-neutral-600 mt-1">
                  Amara's Akwete cloth weaving has brought sustainable income to 15 families in her community, allowing them to live from their traditional craft rather than seeking work in cities.
                </p>
              </div>
            </div>
          </div>
          
          {/* Geographic Distribution */}
          <div className="bg-white rounded-lg shadow-medium p-6">
            <h2 className="text-xl font-display font-bold text-primary-800 mb-4">
              Geographic Distribution
            </h2>
            <div className="h-[300px] w-full bg-primary-200 rounded-lg flex items-center justify-center">
              <ComposableMap
                projectionConfig={{ scale: 60 }}
                width={400}
                height={200}
                style={{ width: "100%", height: "100%" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#E0E7FF"
                        stroke="#fff"
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#2563eb", outline: "none" },
                          pressed: { outline: "none" }
                        }}
                      />
                    ))
                  }
                </Geographies>
                {impactLocations.map(({ name, coordinates, count }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <circle r={6} fill="#2563eb" stroke="#fff" strokeWidth={2} />
                    <text
                      textAnchor="middle"
                      y={-12}
                      style={{ fontFamily: "system-ui", fill: "#111827", fontSize: 10 }}
                    >
                      {name} ({count})
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-medium p-6">
          <h2 className="text-2xl font-display font-bold text-primary-800 mb-6">
            Sustainability Goals Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-800 mb-2">Cultural Preservation</h3>
              <div className="w-full bg-neutral-200 rounded-full h-4 mb-2">
                <div className="bg-primary-500 h-4 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-neutral-600">75% of target reached</p>
              <p className="text-xs text-neutral-500 mt-2">Goal: Document 500 endangered cultural practices by 2026</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-800 mb-2">Artisan Empowerment</h3>
              <div className="w-full bg-neutral-200 rounded-full h-4 mb-2">
                <div className="bg-primary-500 h-4 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-neutral-600">65% of target reached</p>
              <p className="text-xs text-neutral-500 mt-2">Goal: Connect 250 artisans to global markets by 2026</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h3 className="font-semibold text-neutral-800 mb-2">Community Development</h3>
              <div className="w-full bg-neutral-200 rounded-full h-4 mb-2">
                <div className="bg-primary-500 h-4 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-sm text-neutral-600">40% of target reached</p>
              <p className="text-xs text-neutral-500 mt-2">Goal: Reinvest $1M into community development projects by 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboardPage;
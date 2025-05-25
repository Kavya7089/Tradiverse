import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, SortAsc, SortDesc } from 'lucide-react';
import ArtifactCard from '../components/common/ArtifactCard';
import { artifacts } from '../data/mockData';
import green from '/src/assets/greenmart.png';

const MarketplacePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCulture, setSelectedCulture] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortAscending, setSortAscending] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('');
  
  // Get unique cultures
  const cultures = Array.from(new Set(artifacts.map(a => a.culture)));
  // Get unique types
  const types = Array.from(new Set(artifacts.map(a => a.type).filter(Boolean)));

  // Filter artifacts
  const filteredArtifacts = artifacts
    .filter(artifact => 
      artifact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artifact.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(artifact => selectedCulture === '' || artifact.culture === selectedCulture)
    .filter(artifact => selectedType === '' || artifact.type === selectedType)
    .filter(artifact => artifact.price >= priceRange[0] && artifact.price <= priceRange[1])
    .sort((a, b) => sortAscending 
      ? a.price - b.price 
      : b.price - a.price
    );
  
  return (
    <div className="min-h-screen bg-neutral-50 pt-16">
      <div className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Cultural Artifact Marketplace
          </h1>
          <p className="text-lg text-neutral-100 mb-8 max-w-3xl">
            Explore authentic cultural artifacts from artisans around the world, each with a story to tell.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-neutral-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search artifacts, cultures, materials..."
                className="block w-full pl-10 pr-3 py-3 border-0 rounded-md focus:ring-2 focus:ring-primary-500 placeholder:text-neutral-400"
              />
            </div>
            
            <button
              onClick={() => setSortAscending(!sortAscending)}
              className="bg-primary-600 hover:bg-primary-800 text-white p-3 rounded-md flex items-center justify-center"
              title={sortAscending ? "Sort by price: Low to High" : "Sort by price: High to Low"}
            >
              {sortAscending ? <SortAsc size={20} /> : <SortDesc size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      <div className=" mx-auto px-4   py-12"
       style={{
          backgroundImage: `url(${green})`,
          backgroundSize: 'cover',
          backgroundPosition: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 bg-primary-800 bg-opacity-55 p-6 rounded-lg shadow-soft h-fit">
            <div className="flex items-center mb-4">
              <Filter size={18} className="text-primary-700 mr-2" />
              <h2 className="text-lg font-semibold text-white">Filters</h2>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Culture
              </label>
              <select
                value={selectedCulture}
                onChange={(e) => setSelectedCulture(e.target.value)}
                className="w-full p-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Cultures</option>
                {cultures.map((culture) => (
                  <option key={culture} value={culture}>
                    {culture}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Product Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex gap-4">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Features
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="nftVerified" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label htmlFor="nftVerified" className="ml-2 text-sm text-white">
                    NFT Verified
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="has3dModel" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label htmlFor="has3dModel" className="ml-2 text-sm text-white">
                    3D Model Available
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="hasStory" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label htmlFor="hasStory" className="ml-2 text-sm text-white">
                    With Story Recording
                  </label>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium py-2 rounded-md transition-colors">
              Reset Filters
            </button>
          </div>
          
          {/* Artifacts Grid */}
          <div className="flex-1">
            {filteredArtifacts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-600 text-lg">No artifacts found matching your filters.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCulture('');
                    setPriceRange([0, 2000]);
                  }}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtifacts.map((artifact) => (
                  <ArtifactCard key={artifact.id} artifact={artifact} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
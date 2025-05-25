import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Music, Search, Filter, Lock } from 'lucide-react';
import { knowledgeItems } from '../data/mockData';
import KnowledgeCard from '../components/common/KnowledgeCard';

const KnowledgeVaultPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedAccess, setSelectedAccess] = useState<string>('');
  
  // Filter knowledge items
  const filteredItems = knowledgeItems
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(item => selectedType === '' || item.contentType === selectedType)
    .filter(item => selectedAccess === '' || item.accessLevel === selectedAccess);
  
  return (
    <div className="min-h-screen bg-primary-700 pt-16">
      <div className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Cultural Knowledge Vault
          </h1>
          <p className="text-lg text-neutral-100 mb-8 max-w-3xl">
            Explore and learn from the wisdom and traditions of cultures around the world, preserved digitally for future generations.
          </p>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-neutral-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search knowledge by title, description, or tags..."
              className="block w-full pl-10 pr-3 py-3 border-0 rounded-md focus:ring-2 focus:ring-primary-500 placeholder:text-neutral-400"
            />
          </div>
        </div>
      </div>
      
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 bg-white bg-opacity-30 p-6 rounded-lg shadow-soft h-fit">
            <div className="flex items-center mb-4">
              <Filter size={18} className="text-primary-700 mr-2" />
              <h2 className="text-lg font-semibold text-neutral-800">Filters</h2>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Content Type
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="allTypes" 
                    name="contentType"
                    checked={selectedType === ''}
                    onChange={() => setSelectedType('')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                  />
                  <label htmlFor="allTypes" className="ml-2 text-sm text-neutral-700">
                    All Types
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="textType" 
                    name="contentType"
                    checked={selectedType === 'text'}
                    onChange={() => setSelectedType('text')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                  />
                  <label htmlFor="textType" className="ml-2 text-sm text-neutral-700 flex items-center">
                    <BookOpen size={14} className="mr-1" />
                    Text
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="videoType" 
                    name="contentType"
                    checked={selectedType === 'video'}
                    onChange={() => setSelectedType('video')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                  />
                  <label htmlFor="videoType" className="ml-2 text-sm text-neutral-700 flex items-center">
                    <Video size={14} className="mr-1" />
                    Video
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="audioType" 
                    name="contentType"
                    checked={selectedType === 'audio'}
                    onChange={() => setSelectedType('audio')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                  />
                  <label htmlFor="audioType" className="ml-2 text-sm text-neutral-700 flex items-center">
                    <Music size={14} className="mr-1" />
                    Audio
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Access Level
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="allAccess" 
                    name="accessLevel"
                    checked={selectedAccess === ''}
                    onChange={() => setSelectedAccess('')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                  />
                  <label htmlFor="allAccess" className="ml-2 text-sm text-neutral-700">
                    All Access Levels
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="publicAccess" 
                    name="accessLevel"
                    checked={selectedAccess === 'public'}
                    onChange={() => setSelectedAccess('public')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                  />
                  <label htmlFor="publicAccess" className="ml-2 text-sm text-neutral-700">
                    Public
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="communityAccess" 
                    name="accessLevel"
                    checked={selectedAccess === 'community'}
                    onChange={() => setSelectedAccess('community')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                  />
                  <label htmlFor="communityAccess" className="ml-2 text-sm text-neutral-700 flex items-center">
                    <Lock size={12} className="mr-1" />
                    Community Only
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="restrictedAccess" 
                    name="accessLevel"
                    checked={selectedAccess === 'restricted'}
                    onChange={() => setSelectedAccess('restricted')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                  />
                  <label htmlFor="restrictedAccess" className="ml-2 text-sm text-neutral-700 flex items-center">
                    <Lock size={12} className="mr-1" />
                    Restricted
                  </label>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedType('');
                setSelectedAccess('');
              }}
              className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium py-2 rounded-md transition-colors"
            >
              Reset Filters
            </button>
          </div>
          
          {/* Knowledge Items Grid */}
          <div className="flex-1">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-600 text-lg">No knowledge items found matching your filters.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('');
                    setSelectedAccess('');
                  }}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <KnowledgeCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeVaultPage;
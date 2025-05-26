import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Shield, DollarSign, Info, ShoppingCart, Share2 } from 'lucide-react';
import { artifacts } from '../data/mockData';
import ModelViewer from '../components/three/ModelViewer';
import { ArtifactModel } from '../types';
import Navbar from '../components/layout/Navbar';

const ArtifactDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artifact, setArtifact] = useState<ArtifactModel | null>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const found = artifacts.find(a => a.id === id);
    if (found) {
      setArtifact(found);
    }
  }, [id]);
  
  if (!artifact) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center py-12">
          <p className="text-xl text-neutral-600">Loading artifact...</p>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-primary-700 pt-16">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/marketplace" 
          className="inline-flex items-center text-primary-200 hover:text-primary-400 mb-6 font-medium"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Marketplace
        </Link>
        
        <div className="bg-white bg-opacity-40 rounded-lg shadow-medium  overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Images and Model */}
            <div className="p-6">
              {artifact.modelUrl ? (
                <ModelViewer modelPath={artifact.modelUrl} height="400px" />
              ) : (
                <img 
                  src={artifact.imageUrl} 
                  alt={artifact.name}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              )}
              
              <div className="grid grid-cols-4 gap-2 mt-4">
                <img 
                  src={artifact.imageUrl} 
                  alt={artifact.name}
                  className="w-full h-20 object-cover rounded-md cursor-pointer border-2 border-primary-500"
                />
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="w-full h-20 bg-neutral-100 rounded-md flex items-center justify-center text-neutral-400"
                  >
                    <Info size={20} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Artifact Info */}
            <div className="p-6 lg:pr-8">
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-2xl font-display font-bold text-neutral-800">
                  {artifact.name}
                </h1>
                <div className="flex space-x-2">
                  <button className="p-2 text-neutral-600 hover:text-neutral-800 rounded-full hover:bg-neutral-100 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <span className="text-sm font-medium bg-secondary-100 text-secondary-700 px-2.5 py-0.5 rounded-full mr-2">
                  {artifact.culture}
                </span>
                {artifact.nftVerified && (
                  <span className="flex items-center text-xs font-medium bg-primary-100 text-primary-700 px-2.5 py-0.5 rounded-full">
                    <Shield size={12} className="mr-1" />
                    NFT Verified
                  </span>
                )}
              </div>
              
              <div className="flex items-center text-3xl font-semibold text-primary-700 mb-6">
                <DollarSign size={24} className="mr-1" />
                {artifact.price}
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-neutral-800 mb-2">
                  Description
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {artifact.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-neutral-800 mb-2">
                  Materials
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {artifact.materials.map((material, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium bg-neutral-100 text-neutral-700 px-2.5 py-0.5 rounded-full"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-neutral-800 mb-2">
                  Creation Date
                </h2>
                <p className="text-neutral-600">
                  {new Date(artifact.creationDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-neutral-800 mb-2">
                  Artisan
                </h2>
                <Link 
                  to={`/artisans/${artifact.artisanId}`}
                  className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <img 
                    src={`https://images.pexels.com/photos/6195663/pexels-photo-6195663.jpeg`} 
                    alt="Artisan" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-neutral-800">Carlos Sanchez</p>
                    <p className="text-sm text-neutral-600">View artisan profile</p>
                  </div>
                </Link>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-md flex items-center justify-center transition-colors">
                  <ShoppingCart size={18} className="mr-2" />
                  Purchase Now
                </button>
                <button className="flex-1 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 rounded-md transition-colors">
                  Add to Collection
                </button>
              </div>
            </div>
          </div>
          
          {artifact.storyUrl && (
            <div className="px-6 pb-6">
              <hr className="border-neutral-200 my-6" />
              <h2 className="text-xl font-semibold text-neutral-800 mb-4">
                The Story Behind This Artifact
              </h2>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <audio 
                  controls 
                  src={artifact.storyUrl} 
                  className="w-full"
                >
                  Your browser does not support the audio element.
                </audio>
                <p className="mt-2 text-sm text-neutral-600">
                  Listen to the artisan share the cultural significance and creation process of this artifact.
                </p>
              </div>
            </div>
          )}
          
          <div className="px-6 pb-6">
            <hr className="border-neutral-200 my-6" />
            <h2 className="text-xl font-semibold text-neutral-800 mb-4">
              Similar Artifacts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {artifacts
                .filter(a => a.culture === artifact.culture && a.id !== artifact.id)
                .slice(0, 4)
                .map((similarArtifact) => (
                  <Link 
                    key={similarArtifact.id}
                    to={`/marketplace/${similarArtifact.id}`} 
                    className="bg-neutral-50 hover:bg-neutral-100 rounded-lg overflow-hidden transition-colors"
                  >
                    <img 
                      src={similarArtifact.imageUrl} 
                      alt={similarArtifact.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-medium text-neutral-800 line-clamp-1">
                        {similarArtifact.name}
                      </h3>
                      <p className="text-sm text-primary-700 font-medium mt-1">
                        ${similarArtifact.price}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ArtifactDetailPage;
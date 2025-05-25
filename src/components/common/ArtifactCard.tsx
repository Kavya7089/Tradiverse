import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, DollarSign } from 'lucide-react';
import { ArtifactModel } from '../../types';

interface ArtifactCardProps {
  artifact: ArtifactModel;
}

const ArtifactCard: React.FC<ArtifactCardProps> = ({ artifact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-75 rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={artifact.imageUrl}
          alt={artifact.name}
          className="w-full h-56 object-cover"
        />
        {artifact.nftVerified && (
          <div className="absolute top-3 right-3 bg-primary-500 text-white rounded-full p-1" title="NFT Verified">
            <Shield size={16} />
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-neutral-800 line-clamp-1">
            {artifact.name}
          </h3>
          <span className="flex items-center text-primary-700 font-medium">
            <DollarSign size={16} className="mr-1" />
            {artifact.price}
          </span>
        </div>
        
        <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
          {artifact.description}
        </p>
        
        <div className="flex items-center mb-4">
          <span className="text-xs font-medium bg-secondary-100 text-secondary-700 px-2.5 py-0.5 rounded-full">
            {artifact.culture}
          </span>
          {artifact.modelUrl && (
            <span className="ml-2 text-xs font-medium bg-primary-100 text-primary-700 px-2.5 py-0.5 rounded-full">
              3D Model
            </span>
          )}
        </div>
        
        <div className="flex space-x-2">
          <Link
            to={`/marketplace/${artifact.id}`}
            className="flex-1 bg-primary-50 hover:bg-primary-100 text-primary-700 font-medium py-2 rounded-md text-center text-sm transition-colors"
          >
            View Details
          </Link>
          <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-md text-sm transition-colors">
            Purchase
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtifactCard;
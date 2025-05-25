import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle } from 'lucide-react';
import { Artisan } from '../../types';

interface ArtisanCardProps {
  artisan: Artisan;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] bg-neutral-100">
        <img
          src={artisan.imageUrl}
          alt={artisan.name}
          className="w-full h-full object-cover"
        />
        {artisan.verified && (
          <div className="absolute bottom-3 right-3 bg-primary-500 text-white rounded-full px-2 py-1 flex items-center text-sm">
            <CheckCircle size={14} className="mr-1" />
            Verified
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-neutral-800 mb-1">
          {artisan.name}
        </h3>
        
        <div className="flex items-center mb-2 text-neutral-600">
          <MapPin size={14} className="mr-1" />
          <span className="text-sm">{artisan.location}</span>
        </div>
        
        <p className="text-neutral-600 text-sm mb-3 line-clamp-3">
          {artisan.biography}
        </p>
        
        <div className="flex items-center mb-4">
          <span className="text-xs font-medium bg-secondary-100 text-secondary-700 px-2.5 py-0.5 rounded-full">
            {artisan.culture}
          </span>
          <span className="ml-2 text-xs font-medium bg-primary-100 text-primary-700 px-2.5 py-0.5 rounded-full">
            {artisan.specialty}
          </span>
        </div>
        
        <Link
          to={`/artisans/${artisan.id}`}
          className="w-full block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-md text-center transition-colors"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
};

export default ArtisanCard;
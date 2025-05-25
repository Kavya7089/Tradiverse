import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Music, Lock } from 'lucide-react';
import { KnowledgeItem } from '../../types';

interface KnowledgeCardProps {
  item: KnowledgeItem;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ item }) => {
  const getContentIcon = () => {
    switch (item.contentType) {
      case 'video':
        return <Video size={16} />;
      case 'audio':
        return <Music size={16} />;
      default:
        return <BookOpen size={16} />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-50 rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={item.thumbnailUrl || 'https://images.pexels.com/photos/6474483/pexels-photo-6474483.jpeg'}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-neutral-800 bg-opacity-75 text-white rounded-full p-1.5">
          {getContentIcon()}
        </div>
        {item.accessLevel !== 'public' && (
          <div className="absolute bottom-3 right-3 bg-neutral-800 bg-opacity-75 text-white rounded-full px-2 py-1 flex items-center text-xs">
            <Lock size={12} className="mr-1" />
            {item.accessLevel === 'community' ? 'Community' : 'Restricted'}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-neutral-800 mb-2 line-clamp-1">
          {item.title}
        </h3>
        
        <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-secondary-100 text-secondary-700 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          to={`/knowledge/${item.id}`}
          className="w-full block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-md text-center transition-colors"
        >
          Access Content
        </Link>
      </div>
    </motion.div>
  );
};

export default KnowledgeCard;
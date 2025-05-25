import React from 'react';
import { motion } from 'framer-motion';
import { ImpactMetric } from '../../types';
import { getIconComponent } from '../../data/mockData';

interface ImpactCardProps {
  metric: ImpactMetric;
  index: number;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ metric, index }) => {
  const IconComponent = getIconComponent(metric.icon);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white bg-opacity-55 rounded-lg p-6 shadow-medium"
    >
      <div className="flex items-start rounded-lg shadow-sm">
        <div className="bg-primary-100  p-3 rounded-full text-primary-700">
          <IconComponent size={24} />
        </div>
        
        <div className="ml-4">
          <h3 className="text-lg font-medium text-neutral-800">{metric.metricName}</h3>
          <div className="flex items-baseline mt-1">
            <span className="text-3xl font-semibold text-primary-800">{metric.value}</span>
            <span className={`ml-2 text-sm font-medium ${
              metric.positive ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.positive ? '+' : '-'}{metric.changePercent}%
            </span>
          </div>
          <p className="mt-1 text-sm text-neutral-600">{metric.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactCard;
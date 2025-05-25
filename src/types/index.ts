export interface Artisan {
  id: string;
  name: string;
  culture: string;
  location: string;
  biography: string;
  imageUrl: string;
  specialty: string;
  verified: boolean;
  featured: boolean;
}

export interface ArtifactModel {
  id: string;
  name: string;
  artisanId: string;
  description: string;
  culture: string;
  imageUrl: string;
  modelUrl?: string;
  price: number;
  currency: string;
  materials: string[];
  creationDate: string;
  storyUrl?: string;
  nftVerified: boolean;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  culture: string;
  description: string;
  contentType: 'text' | 'video' | 'audio';
  contentUrl: string;
  thumbnailUrl?: string;
  accessLevel: 'public' | 'community' | 'restricted';
  tags: string[];
}

export interface ImpactMetric {
  metricName: string;
  value: number;
  changePercent: number;
  positive: boolean;
  description: string;
  icon: string;
}
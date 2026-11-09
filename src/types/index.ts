export type TimeOfDay = 'day' | 'night' | 'all';

export interface MenuItem {
  id: string;
  name: string;
  nepaliName?: string;
  category: 'coffee' | 'momo' | 'fast-casual' | 'mains' | 'bar' | 'hookah';
  price: number;
  description: string;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVeg?: boolean;
  isAlcoholic?: boolean;
  prepTime?: string;
  tags?: string[];
}

export interface MenuCategory {
  id: MenuItem['category'];
  name: string;
  badge: string;
  tagline: string;
  timeOfDay: TimeOfDay;
}

export interface LiveEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  dayOfWeek: string;
  time: string;
  category: 'acoustic' | 'dj' | 'screening' | 'party' | 'special';
  image: string;
  performerOrMatch: string;
  description: string;
  isFeatured?: boolean;
  entryFee?: string;
  tags: string[];
}

export interface HiringPost {
  id: string;
  title: string;
  department: 'Coffee & Bar' | 'Kitchen & Culinary' | 'Floor & Service' | 'Media & Events';
  type: 'Full-time' | 'Part-time' | 'Shift-based';
  location: string;
  timing: string;
  salaryRange: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  isOpen: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatarColor: string;
  rating: number;
  dateText: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
  comment: string;
  dishMention?: string[];
  mealType?: string;
  spendRange?: string;
  source: 'Google' | 'Facebook';
}

export interface BranchInfo {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  address: string;
  landmark: string;
  phone: string;
  altPhone: string;
  hours: string;
  features: string[];
  googleMapsUrl: string;
  image: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

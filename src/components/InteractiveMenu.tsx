import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Flame, 
  Leaf, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Clock, 
  MessageCircle, 
  X, 
  ChevronRight, 
  Info,
  GlassWater,
  CheckCircle2
} from 'lucide-react';
import { MenuItem, CartItem } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

interface InteractiveMenuProps {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  setIsCartOpen: (open: boolean) => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  cart,
  addToCart,
  removeFromCart,
  setIsCartOpen,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'spicy' | 'popular'>('all');
  const [detailItem, setDetailItem] = useState<MenuItem | null>(null);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'spicy' && !item.isSpicy) return false;
      if (dietaryFilter === 'popular' && !item.isPopular) return false;

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchNepali = item.nepaliName?.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        return matchName || matchNepali || matchDesc || matchTags;
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  // Helper to check item quantity in cart
  const getItemQuantity = (id: string) => {
    const found = cart.find((c) => c.item.id === id);
    return found ? found.quantity : 0;
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  // Quick Direct 1-item WhatsApp Order (Path A)
  const quickWhatsAppOrder = (item: MenuItem) => {
    const message = `Hi TomorrowLand! I want to pre-order ${item.name} (Rs. ${item.price}) for pickup/dine-in in 20 minutes. Please confirm!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/9779806919349?text=${encoded}`, '_blank');
  };

  // Helper for culinary beverage pairings
  const getPairingSuggestion = (category: string) => {
    switch (category) {
      case 'momo':
        return 'Chilled Tuborg Draught Pitcher or Fresh Iced Peach Tea';
      case 'coffee':
        return 'Butter Croissant or Sunrise Breakfast Hashbrowns';
      case 'fast-casual':
        return 'Peri-Peri Crinkle Fries & Chilled Gorkha Craft Beer';
      case 'mains':
        return 'Crispy Chicken Chilli & Lime Mint Cooler';
      case 'bar':
        return 'Chicken Chilli Bites or Wok Schezwan Wings';
      case 'hookah':
        return 'Electric Tomorrowland Signature Cocktail or Moroccan Mint Tea';
      default:
        return 'Signature Fresh Fruit Smoothie';
    }
  };

  return (
    <section id="menu" className="py-12 bg-brand-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Search & Dietary Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-brand-cardDark p-4 rounded-3xl border border-white/10 shadow-lg">
          {/* Live Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Jhol Momo, Pizza, Flat White, Cocktails..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-white text-black font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('popular')}
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                dietaryFilter === 'popular'
                  ? 'bg-brand-gold text-black font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <span>Crowd Favorites</span>
            </button>
            <button
              onClick={() => setDietaryFilter('spicy')}
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                dietaryFilter === 'spicy'
                  ? 'bg-red-500 text-white font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Flame className="w-3 h-3 text-red-400" />
              <span>Spicy Special</span>
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-500 text-white font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Leaf className="w-3 h-3 text-emerald-400" />
              <span>Pure Veg</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-white/10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-brand-gold text-brand-obsidian shadow-neon-gold'
                : 'bg-brand-cardDark text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            All Categories ({MENU_ITEMS.length})
          </button>
          {MENU_CATEGORIES.map((cat) => {
            const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-brand-gold text-brand-obsidian border-brand-gold shadow-neon-gold'
                    : 'bg-brand-cardDark text-gray-300 hover:text-white border-white/5 hover:border-white/20'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-black/30 text-black' : 'bg-white/10 text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-brand-cardDark/50 rounded-3xl border border-white/10">
            <ShoppingBag className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No dishes matched your filter</h3>
            <p className="text-sm text-gray-400 mt-1">Try resetting search keywords or dietary filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-brand-gold text-black text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const qty = getItemQuantity(item.id);

              return (
                <div
                  key={item.id}
                  className="group rounded-3xl bg-brand-cardDark border border-white/5 hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl"
                >
                  {/* Item Image with Badges */}
                  <div 
                    onClick={() => setDetailItem(item)}
                    className="relative h-52 w-full overflow-hidden bg-brand-noir cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-cardDark via-transparent to-black/30" />

                    {/* Price Tag Pill */}
                    <div className="absolute top-3 right-3 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-brand-gold/60 text-brand-gold font-display font-extrabold text-sm shadow-md">
                      Rs. {item.price}
                    </div>

                    {/* Left Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[70%]">
                      {item.isPopular && (
                        <span className="px-2.5 py-1 rounded-full bg-brand-gold text-black text-[10px] font-extrabold uppercase tracking-wider shadow">
                          Crowd Pick
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                          <Flame className="w-2.5 h-2.5" />
                          Spicy
                        </span>
                      )}
                      {item.isVeg && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                          <Leaf className="w-2.5 h-2.5" />
                          Veg
                        </span>
                      )}
                    </div>

                    {/* Prep Time */}
                    {item.prepTime && (
                      <div className="absolute bottom-2.5 left-3 flex items-center gap-1 text-[11px] font-medium text-gray-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>Ready in ~{item.prepTime}</span>
                      </div>
                    )}
                  </div>

                  {/* Item Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 
                          onClick={() => setDetailItem(item)}
                          className="font-bold text-white text-base group-hover:text-brand-gold transition-colors cursor-pointer"
                        >
                          {item.name}
                        </h3>
                      </div>
                      {item.nepaliName && (
                        <span className="text-xs font-semibold text-brand-gold/80 block mb-2 font-serif">
                          {item.nepaliName}
                        </span>
                      )}
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 my-3">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5 font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons: Add to Tray or 1-Click WhatsApp Pre-Order */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      {qty > 0 ? (
                        <div className="flex items-center gap-3 bg-brand-gold text-black px-3 py-1.5 rounded-2xl font-bold">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 hover:bg-black/10 rounded-full transition-colors"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm">{qty} in Tray</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="p-1 hover:bg-black/10 rounded-full transition-colors"
                            title="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/5 hover:bg-brand-gold hover:text-black text-gray-200 text-xs font-bold border border-white/10 transition-all"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Tray</span>
                        </button>
                      )}

                      {/* Direct WhatsApp Pre-Order Trigger */}
                      <button
                        onClick={() => quickWhatsAppOrder(item)}
                        className="p-2 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        title="Pre-order directly on WhatsApp for fast pickup"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Tray Sticky Banner if cart has items */}
        {totalCartCount > 0 && (
          <div className="mt-12 p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-brand-gold via-amber-400 to-amber-500 text-black shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-black text-brand-gold flex items-center justify-center font-bold text-lg">
                {totalCartCount}
              </div>
              <div>
                <h4 className="font-extrabold text-base sm:text-lg">
                  {totalCartCount} Item{totalCartCount > 1 ? 's' : ''} in WhatsApp Pre-Order Tray
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-black/80">
                  Estimated Total: <span className="underline font-bold">Rs. {totalCartPrice}</span> • Ready for pickup or table in ~20 mins
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-black text-white hover:bg-black/80 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <ShoppingBag className="w-4 h-4 text-brand-gold" />
              <span>Review Order & Send on WhatsApp</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Dish Detail & Pairing Modal */}
        {detailItem && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setDetailItem(null)}
          >
            <div 
              className="w-full max-w-lg bg-brand-cardDark rounded-3xl border border-brand-gold/40 shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setDetailItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-60 w-full overflow-hidden bg-brand-noir">
                <img
                  src={detailItem.image}
                  alt={detailItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-cardDark via-transparent to-black/40" />

                <div className="absolute top-4 left-4 flex gap-2">
                  {detailItem.isPopular && (
                    <span className="px-3 py-1 rounded-full bg-brand-gold text-black text-xs font-black uppercase">
                      Crowd Pick
                    </span>
                  )}
                  {detailItem.isSpicy && (
                    <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase">
                      Spicy
                    </span>
                  )}
                  {detailItem.isVeg && (
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase">
                      Pure Veg
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif">
                      {detailItem.name}
                    </h3>
                    {detailItem.nepaliName && (
                      <span className="text-xs text-brand-gold font-serif">
                        {detailItem.nepaliName}
                      </span>
                    )}
                  </div>
                  <div className="text-xl font-display font-extrabold text-brand-gold bg-black/80 px-3 py-1 rounded-xl border border-brand-gold/40">
                    Rs. {detailItem.price}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {detailItem.description}
                </p>

                {/* Beverage Pairing */}
                <div className="p-3.5 rounded-2xl bg-brand-noir border border-white/5 flex items-start gap-3 text-xs">
                  <GlassWater className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-brand-gold font-bold block uppercase text-[10px] tracking-wider">
                      Chef's Suggested Pairing
                    </span>
                    <span className="text-gray-300">
                      {getPairingSuggestion(detailItem.category)}
                    </span>
                  </div>
                </div>

                {/* Ready Time & Fast Order */}
                <div className="flex items-center justify-between text-xs text-gray-400 py-2 border-y border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Kitchen turnaround: ~{detailItem.prepTime || '15 mins'}
                  </span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Made Fresh to Order
                  </span>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => {
                      addToCart(detailItem);
                      setDetailItem(null);
                    }}
                    className="flex-1 py-3 rounded-2xl bg-brand-gold text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Pre-Order Tray</span>
                  </button>

                  <button
                    onClick={() => {
                      quickWhatsAppOrder(detailItem);
                      setDetailItem(null);
                    }}
                    className="py-3 px-4 rounded-2xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 font-semibold text-xs flex items-center gap-1.5 hover:bg-emerald-600/30 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

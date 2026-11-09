import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Clock, 
  MessageCircle, 
  ShoppingBag, 
  Sparkles,
  ArrowRight,
  Flame
} from 'lucide-react';
import { CartItem, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('Dine-in in 20 minutes');
  const [specialNote, setSpecialNote] = useState('');

  if (!isOpen) return null;

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const handleSendWhatsAppOrder = () => {
    if (cart.length === 0) return;

    // Build the formatted itemized list
    const itemsList = cart
      .map(
        (c) => `  • ${c.item.name} x ${c.quantity} = Rs. ${c.item.price * c.quantity}`
      )
      .join('\n');

    const message = `⚡ *TOMORROWLAND FAST PRE-ORDER*
━━━━━━━━━━━━━━━━━━━━
${customerName ? `👤 *Name:* ${customerName}\n` : ''}⏱️ *Target:* ${orderType}
🍽️ *Items Ordered:*
${itemsList}

💰 *Estimated Bill Total:* Rs. ${totalPrice}
${specialNote ? `📝 *Kitchen Note:* ${specialNote}\n` : ''}━━━━━━━━━━━━━━━━━━━━
Hi TomorrowLand, please start preparing my order so it is ready upon arrival!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/9779806919349?text=${encoded}`, '_blank');
  };

  // Popular items suggestions when tray is empty
  const popularSuggestions = MENU_ITEMS.filter((i) => i.isPopular).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-cardDark border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden">
          {/* Drawer Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-gold/15 text-brand-gold flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">WhatsApp Pre-Order Tray</h3>
                <p className="text-xs text-brand-gold">Kumarwoti College Fast Turnaround</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 text-gray-500 mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-white font-bold text-base">Your Tray is Empty</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Add signature items like Jhol Momo or Chicken Pizza to pre-order directly on WhatsApp for zero wait time.
                </p>

                {/* Popular suggestions */}
                <div className="pt-4 text-left">
                  <span className="text-xs uppercase font-bold text-brand-gold block mb-2">
                    Kawasoti Crowd Favorites:
                  </span>
                  <div className="space-y-2">
                    {popularSuggestions.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-2xl bg-brand-noir border border-white/5 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-xl object-cover"
                          />
                          <div>
                            <h5 className="text-xs font-bold text-white">{item.name}</h5>
                            <span className="text-[11px] text-brand-gold font-mono">Rs. {item.price}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-3 py-1 rounded-xl bg-brand-gold text-black text-xs font-bold"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{totalItemsCount} items selected</span>
                    <button
                      onClick={clearCart}
                      className="text-red-400 hover:underline flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Clear all
                    </button>
                  </div>

                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.item.id}
                      className="p-3 rounded-2xl bg-brand-noir border border-white/5 flex items-center justify-between gap-3"
                    >
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">
                          {cartItem.item.name}
                        </h4>
                        <span className="text-xs text-brand-gold font-mono">
                          Rs. {cartItem.item.price} × {cartItem.quantity} ={' '}
                          <strong className="text-white">Rs. {cartItem.item.price * cartItem.quantity}</strong>
                        </span>
                      </div>

                      <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1 border border-white/10 shrink-0">
                        <button
                          onClick={() => removeFromCart(cartItem.item.id)}
                          className="p-1 text-gray-300 hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-white px-1">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(cartItem.item)}
                          className="p-1 text-brand-gold hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Turnaround Time Selector */}
                <div className="p-4 rounded-2xl bg-brand-noir border border-white/5 space-y-3">
                  <label className="block text-xs font-bold text-gray-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    Target Ready Time *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Dine-in in 20 minutes',
                      'Pickup in 15 minutes',
                      'Dine-in in 35 minutes',
                      'Highway transit (30m)',
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setOrderType(option)}
                        className={`p-2 rounded-xl text-left text-xs font-medium border transition-colors ${
                          orderType === option
                            ? 'bg-brand-gold/15 border-brand-gold text-brand-gold font-bold'
                            : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Name & Kitchen Note */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Anish / Pooja"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Special Kitchen Instructions
                    </label>
                    <input
                      type="text"
                      value={specialNote}
                      onChange={(e) => setSpecialNote(e.target.value)}
                      placeholder="e.g. Extra spicy momo jhol, less ice in frappe"
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer CTA */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-brand-noir space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Estimated Total (NPR)</span>
                <span className="text-xl font-display font-extrabold text-brand-gold">
                  Rs. {totalPrice}
                </span>
              </div>

              <button
                onClick={handleSendWhatsAppOrder}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Transmit Order to WhatsApp (+977 9806919349)</span>
              </button>

              <p className="text-[10px] text-center text-gray-400">
                Direct frontline kitchen integration. Table / counter will be prepared before arrival.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


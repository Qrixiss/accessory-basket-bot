import React from 'react';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

interface CartButtonProps {
  itemCount: number;
}

const CartButton: React.FC<CartButtonProps> = ({ itemCount }) => {
  return (
    <Button 
      variant="outline" 
      className="relative"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-cart-bounce">
          {itemCount}
        </span>
      )}
    </Button>
  );
};

export default CartButton;
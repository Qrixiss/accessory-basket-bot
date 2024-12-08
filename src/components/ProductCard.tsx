import React from 'react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, onAddToCart }) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    onAddToCart(id);
    toast({
      title: "Товар добавлен в корзину",
      description: `${name} добавлен в вашу корзину`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-secondary">
      <img src={image} alt={name} className="w-full h-36 object-cover" />
      <div className="p-2">
        <h3 className="text-sm font-semibold mb-1 text-primary">{name}</h3>
        <p className="text-primary text-sm mb-2">{price} ₽</p>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-white text-sm py-1"
          size="sm"
        >
          <ShoppingCart className="mr-1 h-3 w-3" />
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-primary mb-4">{price} ₽</p>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
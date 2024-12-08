import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: (productId: number) => void;
  isInCart: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, image, onAddToCart, isInCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-xl font-bold mb-4">{price} руб.</p>
      <button 
        onClick={() => onAddToCart(id)} 
        className={`px-4 py-2 w-full text-white font-semibold rounded-lg ${isInCart ? 'bg-gray-400' : 'bg-primary hover:bg-primary-dark'}`}
        disabled={isInCart}
      >
        {isInCart ? 'В корзине' : 'Добавить в корзину'}
      </button>
    </div>
  );
};

export default ProductCard;

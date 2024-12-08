import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import CartButton from '@/components/CartButton';

// Моковые данные для примера
const products = [
  {
    id: 1,
    name: "Кожаный браслет",
    price: 1200,
    image: "https://images.unsplash.com/photo-1573586112821-6a1b91638295?q=80&w=1000",
  },
  {
    id: 2,
    name: "Серебряная цепочка",
    price: 2500,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000",
  },
  {
    id: 3,
    name: "Солнцезащитные очки",
    price: 3200,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000",
  },
  {
    id: 4,
    name: "Кожаный ремень",
    price: 1800,
    image: "https://images.unsplash.com/photo-1624668432712-849c4bb64bba?q=80&w=1000",
  },
];

const Index = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const handleAddToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Аксессуары</h1>
          <CartButton itemCount={cartItems.length} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
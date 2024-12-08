import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import CartButton from '@/components/CartButton';

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
    <div className="min-h-screen bg-white">
      <header className="bg-secondary shadow-sm">
        <div className="container mx-auto px-2 py-2 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">QRIXISSHOP</h1>
          <CartButton itemCount={cartItems.length} />
        </div>
      </header>

      <main className="container mx-auto px-2 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
              isInCart={cartItems.includes(product.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
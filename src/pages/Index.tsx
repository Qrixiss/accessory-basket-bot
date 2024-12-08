import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import CartButton from '@/components/CartButton';

const products = [
  {
    id: 2,
    name: "цепочка SEXSOUND W",
    price: 2500,
    image: "/imgs/woman.jpg",
  },
  {
    id: 3,
    name: "цепочка SEXSOUND M",
    price: 2500,
    image: "/imgs/man.jpg",
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
          {/* Используем Link для перехода на страницу корзины */}
          <Link to="/cart" state={{ cartItems }}>
            <CartButton itemCount={cartItems.length} />
          </Link>
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

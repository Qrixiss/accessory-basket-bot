import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const CartPage = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];  // Получаем товары из state

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-secondary shadow-sm">
        <div className="container mx-auto px-2 py-2 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Корзина</h1>
        </div>
      </header>

      <main className="container mx-auto px-2 py-4">
        {cartItems.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          <div>
            <h2 className="text-lg font-semibold">Товары в корзине:</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center mb-4">
                  {/* Картинка товара */}
                  <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>Цена: {item.price} руб.</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link to="/" className="text-blue-500">Вернуться на главную</Link>
      </main>
    </div>
  );
};

export default CartPage;

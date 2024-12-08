import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const CartPage = () => {
  const location = useLocation();

  // Загружаем корзину из localStorage при инициализации компонента
  const loadCartItems = () => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  };

  const [cartItems, setCartItems] = useState<any[]>(loadCartItems);

  // Обновляем корзину, если она была передана через state (на случай перехода через Link)
  useEffect(() => {
    if (location.state?.cartItems) {
      setCartItems(location.state.cartItems);
    }
  }, [location.state]);

  // Вычисляем общую сумму
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Функция удаления товара из корзины
  const handleRemoveFromCart = (productId: number) => {
    // Убираем товар с нужным id из корзины
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);

    // Обновляем корзину в localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

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
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p>{item.description}</p>
                    <p>Цена: {item.price} руб.</p>
                  </div>
                  {/* Кнопка удаления товара */}
                  <button 
                    onClick={() => handleRemoveFromCart(item.id)} 
                    className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                  >
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
            {/* Общая сумма */}
            <div className="mt-4">
              <p className="font-bold text-xl">Общая сумма: {totalAmount} руб.</p>
            </div>
          </div>
        )}
        {/* Кнопка возврата на главную страницу */}
        <Link to="/" className="mt-6 inline-block px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
          Вернуться на главную
        </Link>
      </main>
    </div>
  );
};

export default CartPage;

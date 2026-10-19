
function addToCart(cart, product, quantity = 1) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const existingItem = cart.find((item) => item.id === product.id);
  const newQuantity = (existingItem?.quantity || 0) + quantity;

  if (newQuantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  if (existingItem) {
    return cart.map((item) =>
        item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
    );
  }

  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, productId, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const existingItem = cart.find((item) => item.id === productId);

  if (!existingItem) {
    return cart;
  }

  if (quantity > existingItem.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  return cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
  );
}

function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
  );
}

function calculateOrderTotal(cart, promoCode = '') {
  const subtotal = calculateCartSubtotal(cart);

  const discount =
      promoCode === 'SAVE10' && subtotal >= 20000
          ? Math.round(subtotal * 0.1)
          : 0;

  const delivery = subtotal >= 50000 ? 0 : 30000;
  const total = subtotal - discount + delivery;

  return { subtotal, discount, delivery, total };
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

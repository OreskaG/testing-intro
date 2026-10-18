function addToCart(cart, product, quantity = 1) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть положительным');
  }

  const newCart = cart.map((item) => ({ ...item }));
  const existingItem = newCart.find((item) => item.id === product.id);

  if (existingItem) {
    const newQuantity = existingItem.quantity + quantity;
    if (newQuantity > product.stock) {
      throw new RangeError('Превышен остаток на складе');
    }
    existingItem.quantity = newQuantity;
  } else {
    if (quantity > product.stock) {
      throw new RangeError('Превышен остаток на складе');
    }
    newCart.push({ ...product, quantity });
  }

  return newCart;
}

function changeQuantity(cart, productId, newQuantity) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index === -1) {
    return cart.map((item) => ({ ...item }));
  }

  if (newQuantity <= 0) {
    throw new RangeError('Количество должно быть положительным');
  }

  if (newQuantity > cart[index].stock) {
    throw new RangeError('Превышен остаток на складе');
  }

  const newCart = cart.map((item) => ({ ...item }));
  newCart[index].quantity = newQuantity;
  return newCart;
}

function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId).map((item) => ({ ...item }));
}

function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);
  let discount = 0;

  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = subtotal * 0.1;
  }

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
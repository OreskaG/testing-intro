function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) { 
  if (quantity <= 0) {
    throw new RangeError('Некорректное количество')
  }
  
  const index = cart.findIndex (item => item.id === product.id)
  if (index !== -1) {
    const newQuantity = cart[index].quantity + quantity
    if (newQuantity > product.stock) {
      throw new RangeError('Недостаточное количество товара на складе')
    }
    return cart.map((item, i) => {
      if (i === index){
        return {...item, quantity: newQuantity}
      }
      return item
    })
  }
  
  if (quantity > product.stock) {
      throw new RangeError('Недостаточное количество товара на складе')
    }
  
  return cart.concat({...product, quantity: quantity})
}


function changeQuantity(cart, productId, quantity) { 
  if(quantity <= 0){
    throw new RangeError('Некорректное количество')
  }

  const index = cart.findIndex(item => item.id === productId)
  if(index === -1) {
    return cart
  }

  const item = cart[index]
  if (quantity > item.stock){
    throw new RangeError('Недостаточное количество товара на складе')
  }

  return cart.map((item,i) => {
    if (i === index){
      return {...item, quantity: quantity}
    }
    return item
  })

 }

function removeFromCart(cart, productId) { 
  return cart.filter(item => item.id !== productId)

 }

function calculateCartSubtotal(cart) { 
  return cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)
 }

function calculateOrderTotal(cart, promoCode) { 
  const subtotal = calculateCartSubtotal(cart)

  let discount = 0 
  if (promoCode === 'SAVE10' && subtotal >= 20000){
    discount = subtotal * 0.1
  }

  let delivery = 30000;
  if (subtotal >= 50000){
    delivery = 0
  }

  const total = subtotal - discount + delivery

  return {subtotal, discount, delivery, total}
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

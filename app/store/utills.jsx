export const getCartFromStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || {};
};

export const saveCartToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cart-updated'));
};

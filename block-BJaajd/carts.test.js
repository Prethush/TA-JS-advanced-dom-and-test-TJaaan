const Cart = require('./cart');

jest.mock('./cart');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Cart.mockClear();
});

it('we can check if the class contructor is called', () => {
  const cart = new Cart();
  const cart2 = new Cart();
  expect(Cart).toHaveBeenCalledTimes(2);
});

it('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(Cart).not.toHaveBeenCalled();
});

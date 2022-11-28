class Product {
  constructor(name, price, quantity, impoted = false, category = 'other', taxes = 0) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.impoted = impoted;
    this.category = category;
    this.taxes = taxes;
  }
}

const products = [
  new Product('book', 12.49, 1, false, 'book'),
  new Product('music CD', 14.99, 1, false, 'other'),
  new Product('chocolate bar', 0.85, 1, false, 'food'),
];

products.forEach((product) => {
  const productsList = document.getElementById('products-list');
  const trow = document.createElement('tr');
  trow.innerHTML = `
    <td>${product.name}</td>
    <td>${product.quantity}</td>
    <td>${product.price}</td>
    <td>${product.quantity * product.price}</td>
    <td>${product.taxes}</td>
    <td>${product.quantity * product.price + product.taxes}</td>
  `;
  productsList.appendChild(trow);
});

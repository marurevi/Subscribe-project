class Product {
  constructor(name, price, quantity, impoted = false, category = 'other', taxes = 0) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.impoted = impoted;
    this.category = category;
    this.taxes = this.getTaxes();
  }
  getTaxes() {
    let taxes = 0;
    if (this.impoted) taxes += 0.05;
    if (this.category === 'other') taxes += 0.1;
    return taxes;
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
  const price = product.price * product.quantity;
  const taxes = Math.round((price * product.taxes) * 100) / 100;
  const total = (price + taxes).toFixed(2);

  trow.innerHTML = `
    <td>${product.name}</td>
    <td>${product.quantity}</td>
    <td>${product.price}</td>
    <td>${price}</td>
    <td>${taxes}</td>
    <td>${total}</td>
  `;
  productsList.appendChild(trow);
});

/* eslint-disable no-unused-expressions */
import Product from './product.js';

class Receipt {
  static showReceipt() {
    let result = 0; let
      salesTaxes = 0;
    const products = [
      new Product('book', 12.49, 2, false, 'book'),
      new Product('music CD', 14.99, 1, false, 'other'),
      new Product('chocolate bar', 0.85, 1, false, 'food'),
    ];

    products && products.forEach((product) => {
      Receipt.addNewProductToList(product);
      const price = product.price * product.quantity;
      const taxes = Math.round((price * product.taxes) * 100) / 100;
      const total = (price + taxes).toFixed(2);
      salesTaxes += parseFloat(taxes);
      result += parseFloat(total);
    });

    const total = document.getElementById('result');
    total.innerHTML = `
      <td>Total</td>
      <td></td>
      <td></td>
      <td></td>
      <td>${salesTaxes}</td>
      <td>${result}</td>
      `;
  }

  static addNewProductToList(product) {
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
  }
}

export default Receipt;
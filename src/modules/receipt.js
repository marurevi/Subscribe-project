/* eslint-disable no-unused-expressions */
import Storage from './storage.js';

class Receipt {
  static showReceipt() {
    let result = 0; let
      salesTaxes = 0;
    const products = Storage.getProducts();

    products && products.forEach((product) => {
      Receipt.addNewProductToList(product);
      const price = product.price * product.quantity;
      const taxes = Math.round((price * product.taxes) * 100) / 100;
      const total = (price + taxes).toFixed(2);
      salesTaxes += parseFloat(taxes);
      result += parseFloat(total);
    });
    /* eslint-disable no-unused-expressions */

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

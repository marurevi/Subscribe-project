import Product from './modules/product.js';
import Receipt from './modules/receipt.js';
import Storage from './modules/storage.js';

document.addEventListener('DOMContentLoaded', Receipt.showReceipt);
document.getElementById('product-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let price = document.getElementById('price').value;
  let quantity = document.getElementById('quantity').value;
  let imported = document.getElementById('imported').checked;
  let category = document.getElementById('category').value;

  if (name === '' || price === '' || quantity === '') {
    const alert = document.querySelector('.notification');
    alert.classList.remove('hidden');
    setTimeout(() => {
      alert.classList.add('hidden');
    }, 3000);
  } else {
    const product = new Product(name, price, quantity, imported, category);

    Receipt.addNewProductToList(product);
    Storage.addProduct(product);

    name = '';
    price = '';
    quantity = '';
    imported = false;
    category = 'other';
    document.location.reload();
  }
});

document.getElementById('delete').addEventListener('click', (e) => {
  e.preventDefault();
  Storage.removeProducts();
  document.location.reload();
});

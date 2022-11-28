class Storage {
  static getProducts() {
    let products;
    if (localStorage.getItem('products') === null) {
      products = [];
    } else {
      products = JSON.parse(localStorage.getItem('products'));
    }
    return products;
  }

  static addProduct(product) {
    const products = Storage.getProducts();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }

  static removeProducts() {
    localStorage.removeItem('products');
  }
}

export default Storage;
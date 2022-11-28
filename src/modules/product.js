class Product {
  constructor(name, price, quantity, impoted = false, category = 'other') {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.impoted = impoted;
    this.category = category;
    this.taxes = this.getTaxes() || 0;
  }

  getTaxes() {
    let taxes = 0;
    if (this.impoted) taxes += 0.05;
    if (this.category === 'other') taxes += 0.1;
    return taxes;
  }
}

export default Product;
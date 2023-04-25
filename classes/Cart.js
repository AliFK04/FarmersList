class Cart{
    constructor(products, total){
        this.products = [];
        this.total = 0;
    }
    addProduct(Product){
        this.products.push(Product);
        this.total = Product.price + this.total;
    }
    removeProduct(i){
        this.total = this.total - this.products[i].price
        this.products.splice(i, 1)
    }

}

module.exports = Cart;
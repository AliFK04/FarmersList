const Customer = require('./Customer')

class Auth{
    constructor(customers){
        this.customers = []
    }
    register(name, email, shippingAddress){
        this.customers.push(new Customer(name, email, shippingAddress))
    }
    login(email){
        return this.customers.find((customer) => {
            return customer.email == email;
        }) || null
    }
}

module.exports = Auth;
function orders(product, quantity) {
    let productsMap = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    }

    return (productsMap[product] * quantity).toFixed(2);
}

console.log(
    orders("water", 5)
);

console.log(
    orders("coffee", 2)
);


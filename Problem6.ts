interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let mostExpensiveProduct: Product = products[0];

  for (const product of products) {
    if (product.price > mostExpensiveProduct.price) {
      mostExpensiveProduct = product;
    }
  }

  return mostExpensiveProduct;
}

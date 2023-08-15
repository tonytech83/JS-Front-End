const BASE_URL = 'http://localhost:3030/jsonstore/products/';

export async function getAllProducts() {
  const response = await fetch(BASE_URL);
  return response.json();
}

export async function addProductToCart(name, cost, imgUrl) {
  const headers = {
    method: 'POST',
    body: JSON.stringify({ name, cost: Number(cost), imgUrl, isBought: false })
  }

  const response = await fetch(BASE_URL, headers);
  return response.json();
}

export async function buyProduct(productId) {
  const headers = {
    method: 'PATCH',
    body: JSON.stringify({ isBought: true })
  }

  const response = await fetch(BASE_URL + productId, headers);
  return response.json();
}

export async function removeProduct(productId) {
  const headers = {
    method: 'DELETE'
  }

  const response = await fetch(BASE_URL + productId, headers);
  return response.json();
}
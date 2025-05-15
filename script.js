let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  cart.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - ${entry.price} ريال`;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = `الإجمالي: ${total} ريال`;
}
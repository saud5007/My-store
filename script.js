let let cartCount = 0;

const buttons = document.querySelectorAll("button");
const cartCounter = document.getElementById("cart-count");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCounter.textContent = cartCount;
    alert("تمت إضافة المنتج إلى السلة!");
  });
});

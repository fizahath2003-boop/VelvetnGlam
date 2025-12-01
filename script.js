let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  let list = document.getElementById("cartList");
  let totalArea = document.getElementById("total");

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    list.innerHTML += `
      <li>${item.name} - $${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </li>`;
  });

  totalArea.innerHTML = "Total: $" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

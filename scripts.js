let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCart();
    alert(productName + " добавлен в корзину!");
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.textContent = item.name + ' - ' + item.price + ' руб.';
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.textContent = 'Удалить';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    document.getElementById('totalPrice').textContent = 'Общая стоимость: ' + total + ' руб.';
    document.getElementById('orderForm').style.display = cart.length > 0 ? 'block' : 'none';
}

function placeOrder() {
    const name = document.getElementById('customerName').value;
    const address = document.getElementById('customerAddress').value;
    if (name && address) {
        alert(`Спасибо, ${name}! Ваш заказ на сумму ${total} руб. оформлен и будет доставлен по адресу: ${address}.`);
        cart = [];
        total = 0;
        updateCart();
        document.getElementById('customerName').value = '';
        document.getElementById('customerAddress').value = '';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}

function registerUser() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    if (name && email && password) {
        alert(`Спасибо за регистрацию, ${name}!`);
        document.getElementById('regName').value = '';
        document.getElementById('regEmail').value = '';
        document.getElementById('regPassword').value = '';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}
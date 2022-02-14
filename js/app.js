const cartPlusButtons = document.getElementsByClassName('cart-plus');
for (const cartPlusButton of cartPlusButtons) {
    cartPlusButton.addEventListener('click', function(event) {
        const cartQuantityInput = event.target.parentNode.parentNode.childNodes[3];
        let cartQuantityValue = parseInt(cartQuantityInput.value);
        cartQuantityInput.value = cartQuantityValue + 1;
        console.log(cartQuantityValue);
    })
}
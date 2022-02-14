function cartUpdate(cartButtonClass, isPlus) {
    // Getting cart buttons 
    const cartButtons = document.getElementsByClassName(cartButtonClass);
    // Looping all the buttons 
    for (const cartButton of cartButtons) {
        // adding evnet listener spesific button 
        cartButton.addEventListener('click', function(event) {
            let cartQuantityInput = '';
            // getting cart input by clicking button
            if (isPlus) {
                cartQuantityInput = cartButton.previousElementSibling;
            } else {
                cartQuantityInput = cartButton.nextElementSibling;
            }
            let cartQuantityValue = parseInt(cartQuantityInput.value);

            // cart quantitiy increasing or decreasing 
            if (isPlus) {
                cartQuantityInput.value = cartQuantityValue + 1;
            } else if (cartQuantityValue > 1) {
                cartQuantityInput.value = cartQuantityValue - 1;
            }

            // price increase or decrease 
            const itemPrice = cartButton.parentElement.nextElementSibling.lastChild;
            const itemId = itemPrice.id;
            const itemPriceInt = parseInt(itemPrice.innerText);
            if (itemId == 'phone-price') {
                itemPrice.innerText = parseInt(cartQuantityInput.value) * 1219;
            } else if (itemId == 'case-price') {
                itemPrice.innerText = parseInt(cartQuantityInput.value) * 59;
            }

            // Total calculation 
            const subTotal = document.getElementById('sub-total');
            const tax = document.getElementById('tax-amount');
            const total = document.getElementById('total-price');
            const phonePrice = document.getElementById('phone-price').innerText;
            const casePrice = document.getElementById('case-price').innerText;
            subTotal.innerText = parseInt(phonePrice) + parseInt(casePrice);
            tax.innerText = parseInt(subTotal.innerText) / 10;
            total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);

        })
    }
}


cartUpdate('cart-plus', true);
cartUpdate('cart-minus', false);
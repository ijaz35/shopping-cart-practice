function keyHandler(product, isAdd, price) {
    debugger;
    const productInput = document.getElementById(product + '-number');
    const productInputString = productInput.value;
    let productInputValue = parseInt(productInputString);
    if (isAdd) {
        productInputValue = productInputValue + 1;
        productInput.value = productInputValue;
    } else {
        if (productInputValue > 0) {
            productInputValue = productInputValue - 1;
            productInput.value = productInputValue;
        }
    }
    const productPrice = document.getElementById(product + '-price');

    const productPriceValue = price * productInputValue;
    productPrice.innerText = productPriceValue;
    calculateTotal();
}
function getInput(product) {
    const productNumber = document.getElementById(product + '-number');
    const productNumberValue = parseInt(productNumber.value);
    return productNumberValue;
}
function calculateTotal() {
    const subTotal = document.getElementById('sub-total');
    const subTotalValue = getInput('phone') * 1219 + getInput('case') * 59;
    subTotal.innerText = subTotalValue;
    const tax = document.getElementById('tax-total');
    const taxValue = subTotalValue / 10;
    tax.innerText = taxValue;
    const total = document.getElementById('total');
    const totalAmount = subTotalValue + taxValue;
    total.innerText = totalAmount;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    /* const phoneInput = document.getElementById('phone-number');
    const phoneInputString = phoneInput.value;
    let phoneInputValue = parseInt(phoneInputString);
    phoneInputValue = phoneInputValue + 1;
    phoneInput.value = phoneInputValue;

    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = 1219 * phoneInputValue; */

    keyHandler('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    /*  const phoneInput = document.getElementById('phone-number');
     const phoneInputString = phoneInput.value;
     let phoneInputValue = parseInt(phoneInputString);
     if (phoneInputValue > 0) {
         phoneInputValue = phoneInputValue - 1;
         phoneInput.value = phoneInputValue;
     }
     const phonePrice = document.getElementById('phone-price');
     phonePrice.innerText = 1219 * phoneInputValue; */
    keyHandler('phone', false, 1219);
});
document.getElementById('case-plus').addEventListener('click', function () {
    keyHandler('case', true, 59);
})
document.getElementById('case-minus').addEventListener('click', function () {
    keyHandler('case', false, 59);
})
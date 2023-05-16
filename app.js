/*------------------------------------------------- 
    Function of Phone and Case Number update 
--------------------------------------------------*/
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate grand total
    calculateTotal();
}

/*----------------------------- 
    Calculate Final Total
------------------------------*/
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;

    /* const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value); */
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const textAmount = subTotal * 0.10;
    const grandTotal = subTotal + textAmount;

    // display the sub total, text amount and grand total in the website
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-amount').innerText = textAmount;
    document.getElementById('grand-total').innerText = grandTotal;
}

/*------------------------------------------------------------- 
    Event Handler of Phone increase and decrease button 
--------------------------------------------------------------*/
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

/*---------------------------------------------------------- 
    Event Handler of Case increase and decrease button
-----------------------------------------------------------*/
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);

    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1; */


});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

    /*   const caseInput = document.getElementById('case-number');
      const caseNumber = caseInput.value;
      caseInput.value = parseInt(caseNumber) - 1; */
});


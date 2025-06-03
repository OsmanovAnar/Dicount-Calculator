const priceForm = document.querySelector("#price");
const rangeInput = document.querySelector("#range-input");
const calcPercentBtn = document.querySelector("#calc-percent");
const resultEl = document.querySelector(".result");
const enteredPrice = document.querySelector("#entered-price");
const currentDiscount = document.querySelector("#current-discount");
const discoundDisplayEl = document.querySelector('#discount-display');
let enteredPriceShow = document.querySelector('#entered-price-show')



enteredPriceShow.addEventListener('input', (e) => {
    enteredPriceShow.innerHTML = `Введенная стоимость: ${e.target.value}`;
    console.log(enteredPriceShow);
})


rangeInput.addEventListener('input', (e) => {
    console.log(e.target.value);
    discoundDisplayEl.textContent = `Текущая скидка: ${rangeInput.value}%`;
})


calcPercentBtn.addEventListener("click", () => {
    enteredPrice.textContent = `Введенная стоимость: ${priceForm.value}`;

    resultEl.textContent = `Цена с учетом скидки: ${priceForm.value - (priceForm.value * rangeInput.value) / 100}`;
});
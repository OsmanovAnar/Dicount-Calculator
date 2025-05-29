let priceForm = document.querySelector("#price");
let rangeInput = document.querySelector("#range-input");
let calcPercentBtn = document.querySelector("#calc-percent");
let resultEl = document.querySelector(".result");
let enteredPrice = document.querySelector("#entered-price");
let currentDiscount = document.querySelector("#current-discount");


calcPercentBtn.addEventListener("click", () => {
    enteredPrice.textContent = `Введенная стоимость: ${priceForm.value}`;
    currentDiscount.textContent = `Текущая скидка: ${rangeInput.value}`;
    resultEl.textContent = `Цена с учетом скидки: ${priceForm.value - (priceForm.value * rangeInput.value) / 100}`;
});

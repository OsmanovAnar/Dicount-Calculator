let priceForm = document.querySelector("#price");
let rangeInput = document.querySelector("#range-input");
let calcPercentBtn = document.querySelector("#calc-percent");
let resultEl = document.querySelector(".result");
let enteredPrice = document.querySelector("#entered-price");
let currentDiscount = document.querySelector("#current-discount");

enteredPrice.innerHTML = `Введенная стоимость: ${priceForm.value}`;


priceForm.addEventListener('input', (e) => {
    console.log(e.target.value);
    enteredPrice.textContent = `Введенная стоимость: ${e.target.value}`
})


calcPercentBtn.addEventListener("click", () => {
    enteredPrice.textContent = `Введенная стоимость: ${priceForm.value}`;
    currentDiscount.textContent = `Текущая скидка: ${rangeInput.value}`;
    resultEl.textContent = `Цена с учетом скидки: ${priceForm.value - (priceForm.value * rangeInput.value) / 100}`;
});
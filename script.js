"use strict";

const weightInput = document.querySelector("#num1");
const heightInput = document.querySelector("#num2");
const BMIInput = document.querySelector(".sum");
const button = document.querySelector(".btn");

const BMICalc = function (weight, height) {
  const result = weight / ((height * height) / (100 * 100));
  return result;
};

button.addEventListener("click", function () {
  const w = Number(weightInput.value);
  const h = Number(heightInput.value);
  const result = BMICalc(w, h);
  BMIInput.value = result;
});

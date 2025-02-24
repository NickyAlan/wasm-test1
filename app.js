import init, { multiply_rust } from "./pkg/test_wasm.js";

async function run() {
  await init();
  function multiplyJs() {
    const numbers = parseFloat(document.getElementById("numbers").value);
    const result = multiply_rust(numbers);
    document.getElementById("result").innerText = result;
  }
  document.getElementById("numbers").addEventListener("keyup", multiplyJs);
}

run();

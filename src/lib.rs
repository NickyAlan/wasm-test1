use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn multiply_rust(number: f64) -> f64 {
    number * 3.
}


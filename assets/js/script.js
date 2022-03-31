/* Author: 

*/

document.querySelector('input[type="range"]').addEventListener("mousemove", function() {handleChange(this.value)})
let rangeLabel = document.querySelector("label");

function handleChange(x) {
  rangeLabel.innerHTML = x
  rangeLabel.style.left = (x-10) + "%"
}























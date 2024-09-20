//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
	let delayValue = parseInt(delay.value);
	setTimeout(myFunc, delayValue);
});
function myFunc(){
	output.innerHTML = text.value;
}
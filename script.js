
const input = document.getElementById("text-input").value.toLowerCase().replace(/[^a-z0-9]/g, '');
console.log(input);
const Reversedvalue = input.split('').reverse().join('');
const result = document.getElementById("result");
const button = document.getElementById("check-btn");

button.addEventListener("click", () => {
    if (input === Reversedvalue) {
        result.textContent = `${input} is a palindrome`;
    } else {
        result.textContent = `${input} is a palindrome`;
    }
})

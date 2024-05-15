function checkPalindrome() {
    let inputField = document.getElementById("text-input");
    let input = inputField.value.toLowerCase().replace(/[^a-z0-9]/ig, '');
    console.log(input);
    const reversedInput = input.split('').reverse().join('');
    console.log(reversedInput);

    let result = document.getElementById("result");

    if (input === "") {
        alert("Please input a value");
        return; 
    } else if(input === reversedInput) {
        result.innerHTML = `${inputField.value} is a palindrome`;
    } else{
        result.innerHTML = `${inputField.value} is not a palindrome`;
    }

    
    inputField.value = "";
}

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const checkBtn = document.getElementById('checkBtn');
    const result = document.getElementById('result');

    const palindromeChecker = (str) => {
        const palindrome = str.split('').reverse().join('');
        return str === palindrome;
    }

    checkBtn.addEventListener('click', () => {
        const inputValue = inputText.value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

        if (inputValue === '') {
            alert('Please Input a value.');
        } else {
            const inputResult = palindromeChecker(inputValue);

            result.textContent = inputResult ? `${inputValue} is a Palindrome`: `${inputValue} is not a Palindrome`;
        }
    })
})
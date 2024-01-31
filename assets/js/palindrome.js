document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const result = document.getElementById('result');

    const palindromeChecker = (str) => {
        const palindrome = str.split('').reverse().join('');
        return str === palindrome;
    }

    checkBtn.addEventListener('click', () => {
        let initialValue = inputText.value;
        const filteredValue = initialValue.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

        if (filteredValue === '') {
            alert('Please Input a value.');
        } else {
            const inputResult = palindromeChecker(filteredValue);
            result.textContent = inputResult ? `${initialValue} is a Palindrome`: `${initialValue} is not a Palindrome`;
        }
    })

    clearBtn.addEventListener('click', () => {
        result.textContent = '';
        inputText.value = '';
        inputText.focus();
    })
})
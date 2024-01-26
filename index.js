const amount = 3000000

function formatMoney(amount) {
    const amountStr = String(amount)
    let count = 0;
    let result = [];

    for (let i = amountStr.length - 1; i >= 0; i--) {
        let character = amountStr[i]
        count++;

        result.unshift(character)
        if (count === 3) {
            count = 0
            result.unshift(',')
        }
    }

    return result.join('');
}

console.log(formatMoney(amount));
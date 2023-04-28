// Code your solutions in this file
function writeCards(names, eventName) {
    const thankYous = [];
    for (let i = 0; i <= names.length - 1; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYous;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    };
}
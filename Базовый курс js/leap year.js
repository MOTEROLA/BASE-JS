// Объявляем переменную для года
let year = 2020;

// Функция для проверки высокостного года
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Год делится на 400, он высокостный
            } else {
                return false; // Год делится на 100, но не на 400, он не высокостный
            }
        } else {
            return true; // Год делится на 4, но не на 100, он высокостный
        }
    } else {
        return false; // Год не делится на 4, он не высокостный
    }
}

// Проверяем, является ли 2020 высокостным
if (isLeapYear(year)) {
    console.log(year + ' является высокостным годом.');
} else {
    console.log(year + ' не является высокостным годом.');
}

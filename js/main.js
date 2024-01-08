const display = document.querySelector('.js-display');
const btnsCalculate = document.querySelectorAll('.js-btn-calculate');
const btns = document.querySelectorAll('.js-btn');
let isNewCalculation = false;


btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;

        if (isNewCalculation) {
            display.value = "";
            isNewCalculation = false;
        }

        if(itemText === "x") {
            itemText = "*";
        }

        if(itemText === "/") {
            itemText = "/";
        }

        if(itemText === "AC") {
            display.value = "";
        }

        if(itemText === "C") {
            display.value = display.value.slice(0, -1);
        }

        if(itemText === "=") {
            display.value = eval(display.value);
            isNewCalculation = true;
        }

        if(itemText !== "C" && itemText !== "AC" && itemText !== "=") {
            appendToInput(itemText);
        }
    });
});

const sin = () => {
    display.value = Math.sin(display.value);
}
const cos = () => {
    display.value = Math.cos(display.value);
}
const tan = () => {
    display.value = Math.tan(display.value);
}
const pow = () => {
    display.value = Math.pow(display.value, 2);
}
const sqrt = () => {
    display.value = Math.sqrt(display.value, 2);
}

btnsCalculate.forEach((item) => {
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;
        if(itemText === "sin") {
            sin();
            isNewCalculation = true;
        }
        if(itemText === "cos") {
            cos();
        }
        if(itemText === "tan") {
            tan();
        }
        if(itemText === "Х²") {
            pow();
        }
        if(itemText === "√") {
            sqrt();
        }
    });
});

function appendToInput(character) {
    if (/^[0-9()+*/-]$/.test(character) || (character === '.' && !display.value.includes('.'))) {
        if (/[-+*/().]$/.test(display.value) && /[-+*/().]$/.test(character)) {
            display.value = display.value.slice(0, -1) + character;
        } else {
            display.value += character;
        }
    } else {
        console.log("Ошибка: Допустимы только цифры и операторы +, *, /, -");
    }
}


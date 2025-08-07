// A very basic and incomplete script
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === '=') {
                try {
                    // Note: using eval() is not safe for production code!
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else {
                if (display.textContent === '0' || display.textContent === 'Error') {
                    display.textContent = buttonText;
                } else {
                    display.textContent += buttonText;
                }
            }
        });
    });
});

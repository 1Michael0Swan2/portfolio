// Global Variables
let displayValue = ""; // calculator.html

/// /// ///

// General Behaviour
/*window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});*/

// index.html
function sayHello() {
    alert("Hello from Javascript!");
}

// contact.html
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value;

    const response = `Thanks, ${name}! I received your message: "${message}"`;
    const responseEmail = `Sent message from email address: ${email}`

    document.getElementById("response").textContent = response;
    document.getElementById("responseEmail").textContent = responseEmail

    // Optional: clear the form
    this.reset();
});

// calculator.html
function updateDisplay(newDisplay = displayValue) {
    if (newDisplay == displayValue) {
        document.getElementById("display").value = displayValue;
    } else {
        document.getElementById("display").value = newDisplay
    }
}

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function appendOperator(op) {
    displayValue += op;
    updateDisplay();
}

function calculateResult() {
    try {
        //displayValue = eval(displayValue).toString(); // Apparently not safe.
        displayValue = Function('"usse strict"; return (' + displayValue + ')')().toString();
        updateDisplay();
    } catch {
        updateDisplay("Error");
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}
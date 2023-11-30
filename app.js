function myFunction(p1, p2) {
  return p1 * p2;
}

// Get the input values
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const resultSpan = document.getElementById("result");

// Function to calculate and display result
function calculateAndDisplay() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);

  // Check if both inputs are numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = myFunction(num1, num2);
    resultSpan.textContent = result; // Display the result
  } else {
    resultSpan.textContent = "Please enter valid numbers"; // Error message for invalid input
  }
}

// Event listener for when inputs change
input1.addEventListener("input", calculateAndDisplay);
input2.addEventListener("input", calculateAndDisplay);

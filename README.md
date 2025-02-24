# Quadratic Equation Solver

## Overview

This project is a simple web-based quadratic equation solver. It allows users to input the coefficients of a quadratic equation in the form of ax² + bx + c = 0 and calculates the roots (solutions) of the equation. The solver provides a user-friendly interface with input fields and a custom numeric keypad for easy input.

## Features

-   Solves quadratic equations of the form ax² + bx + c = 0.
-   Displays the discriminant (D) and the roots (x1, x2).
-   Handles cases with two real roots, one real root (repeated), and no real roots.
-   User-friendly interface with a custom numeric keypad.
-   Input validation to ensure all necessary fields are filled.
-   Clear button to reset the input fields and results.
-   Keyboard support for input.

## Setup Instructions

### Prerequisites

Before you begin, ensure you have a modern web browser installed (e.g., Chrome, Firefox, Safari).  No additional software or installations are required as this project is purely client-side.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shodievSA/quadratic-equations-solver.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd quadratic-equations-solver
    ```

### Configuration

No specific configuration is needed. The project is designed to run directly in a web browser.

### Running the Project

1.  **Open `index.html` in your web browser.**  You can do this by double-clicking the file or by right-clicking and selecting "Open with" followed by your browser.

2.  **Using the Solver:**

    *   Input the coefficients `a`, `b`, and `c` into the provided input fields.  Use the on-screen numeric keypad to enter values.
    *   Use the `+` and `-` keys to set the sign of the a, c, and e input values
    *   You can either use the on-screen number pad, or your physical keyboard numbers to input the numeric values.
    *   Click the "Solve" button to calculate the roots.
    *   The results, including the discriminant and the roots (x1, x2), will be displayed below.
    *   If the equation has no real roots, a message indicating this will be shown.
    *   Click the "Remove" button to clear the inputs and results, and to solve a new equation.

## Dependencies

This project has no external dependencies. It uses only standard HTML, CSS, and JavaScript.

## Environment Variables

No environment variables are required for this project.

## Usage

1.  Enter the coefficients `a`, `b`, and `c` of the quadratic equation into the corresponding input fields.
2.  Click the "Solve" button.
3.  View the calculated discriminant and roots.
4.  Click the "Remove" button to reset the solver.

## Troubleshooting

*   **Ensure all input fields are filled:** The solver requires values for `a`, `c`, and `e` (coefficients related to x², x, and the constant term). An alert message will appear if any of these fields are left empty.
*   **Incorrect results:** Double-check the input values for any typos or errors.
*   **Browser compatibility:** The solver is designed to work with modern web browsers. If you encounter issues, try using a different browser.

## Contributing

Contributions are welcome! If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE). (Add a LICENSE file if applicable)

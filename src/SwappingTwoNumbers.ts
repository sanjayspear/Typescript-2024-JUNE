class SwappingTwoNumbers {

    public static main() {

        // ===================Approach 1 with using 3rd variable===================
        // Swapping values of A and B using a temporary variable
        let A: number = 100;
        let B: number = 200;

        console.log(`Before swapping the value of A is ${A} and the value of B is ${B}`);

        // Temporary variable `temp` holds the value of A, so A can take B's value
        let temp: number;
        temp = A;
        A = B;
        B = temp;

        console.log(`After swapping the value of A is ${A} and the value of B is ${B}`);

        // ===================Approach 2 without using 3rd variable===================
        // Swapping values of X and Y using addition and subtraction
        let X: number = 400;
        let Y: number = 600;

        console.log("Before swapping the value of X is " + X + " and the value of Y is " + Y);

        // The sum is stored in X, then Y is calculated by subtracting the previous Y from the sum
        X = X + Y; // 400 + 600 = 1000
        Y = X - Y; // 1000 - 600 = 400 (now X)
        X = X - Y; // 1000 - 400 = 600 (now Y)

        console.log("After swapping the value of X is " + X + " and the value of Y is " + Y);

        // ===================Approach 3 without using 3rd variable===================
        // Swapping using multiplication and division
        // NOTE: M and N should not be zero to avoid division by zero error
        let M: number = 20;
        let N: number = 30;

        console.log("Before swapping the value of M is " + M + " and the value of N is " + N);

        // Multiply M and N, store it in M. Then, find N by dividing the result by N
        M = M * N; // 20 * 30 = 600
        N = M / N; // 600 / 30 = 20
        M = M / N; // 600 / 20 = 30

        console.log("After swapping the value of M is " + M + " and the value of N is " + N);

        // ===================Approach 4 without using 3rd variable (XOR Bitwise Operator)===================
        // Swapping using XOR (bitwise exclusive OR)
        // NOTE: P and Q should not be zero
        let P: number = 5;
        let Q: number = 10;

        console.log("Before swapping the value of P is " + P + " and the value of Q is " + Q);

        // XOR operation swaps the values without using additional variables
        P = P ^ Q; // 5 ^ 10 = binary 1111
        Q = P ^ Q; // binary 1111 ^ 10 = 5 (P)
        P = P ^ Q; // binary 1111 ^ 5 = 10 (Q)

        console.log("After swapping the value of P is " + P + " and the value of Q is " + Q);

        // ===================Approach 5 without using 3rd variable (Using single expression)===================
        // Swapping using a single expression
        let E: number = 10;
        let F: number = 20;

        console.log("Before swapping the value of E is " + E + " and the value of F is " + F);

        // Using a single line expression to swap
        F = E + F - (E = F); // F takes the sum, E is assigned the previous value of F

        console.log("After swapping the value of E is " + E + " and the value of F is " + F);
    }
}

// Execute the main function
SwappingTwoNumbers.main();

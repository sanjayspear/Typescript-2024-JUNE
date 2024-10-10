"use strict";
class SwappingTwoNumbers {
    static main() {
        let A = 100;
        let B = 200;
        console.log(`Before swapping the value of A is ${A} and the value of B is ${B}`);
        let temp;
        temp = A;
        A = B;
        B = temp;
        console.log(`After swapping the value of A is ${A} and the value of B is ${B}`);
        let X = 400;
        let Y = 600;
        console.log("Before swapping the value of X is " + X + " and the value of Y is " + Y);
        X = X + Y;
        Y = X - Y;
        X = X - Y;
        console.log("After swapping the value of X is " + X + " and the value of Y is " + Y);
        let M = 20;
        let N = 30;
        console.log("Before swapping the value of M is " + M + " and the value of N is " + N);
        M = M * N;
        N = M / N;
        M = M / N;
        console.log("After swapping the value of M is " + M + " and the value of N is " + N);
        let P = 5;
        let Q = 10;
        console.log("Before swapping the value of P is " + P + " and the value of Q is " + Q);
        P = P ^ Q;
        Q = P ^ Q;
        P = P ^ Q;
        console.log("After swapping the value of P is " + P + " and the value of Q is " + Q);
        let E = 10;
        let F = 20;
        console.log("Before swapping the value of E is " + E + " and the value of F is " + F);
        F = E + F - (E = F);
        console.log("After swapping the value of E is " + E + " and the value of F is " + F);
    }
}
SwappingTwoNumbers.main();

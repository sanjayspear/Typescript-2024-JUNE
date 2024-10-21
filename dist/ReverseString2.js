"use strict";
class Reverse {
    static main() {
        const s = "Sa#$nja&(y";
        let rev = "";
        let letters = [];
        for (let i = s.length - 1; i >= 0; i--) {
            const c = s.charAt(i);
            if (/[a-zA-Z]/.test(c)) {
                letters.push(c);
            }
        }
        let index = 0;
        for (let i = 0; i < s.length; i++) {
            const c = s.charAt(i);
            if (/[a-zA-Z]/.test(c)) {
                rev += letters[index];
                index++;
            }
            else {
                rev += c;
            }
        }
        console.log("Reversed string: " + rev);
    }
}
Reverse.main();

class Reverse {

    public static main(): void {
        const s: string = "Sa#$nja&(y";
        let rev: string = "";

        let letters: string[] = [];

        // Collect the alphabetic characters in reverse order
        for (let i = s.length - 1; i >= 0; i--) {
            const c = s.charAt(i);
            if (/[a-zA-Z]/.test(c)) {  // Check if the character is a letter
                letters.push(c);
            }
        }

        let index: number = 0;
        // Rebuild the string with letters in reverse and special characters intact
        for (let i = 0; i < s.length; i++) {
            const c = s.charAt(i);
            if (/[a-zA-Z]/.test(c)) {
                rev += letters[index];
                index++;
            } else {
                rev += c;
            }
        }
        console.log("Reversed string: " + rev);
    }
}

// Call the main method
Reverse.main();

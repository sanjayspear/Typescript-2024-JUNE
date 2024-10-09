class OddNumber {
    static inputNumber(n: number){
        for(let i=1; i<=100; i++){
            if(i % 2 == 1){
                console.log(i);
            }
        }
    }
}

OddNumber.inputNumber(100);
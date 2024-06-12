type cardNumber = {
    cardnumber : number
}

type cardDate = {
    date : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

let mycardDetails : cardDetails = {
    cardnumber : 1234,
    date : "21 FEB 2022",
    cvv : 156
}
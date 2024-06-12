interface UserDetail {
    readonly dbId: number,
    email: string,
    userId: number,
    // Optional
    googleId?: string,

    //startTrail: () => string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

const hitesh: UserDetail = {
    dbId: 22, 
    email: "h@h.com", 
    userId: 101,

    startTrail: () => {
        return "trail started"
    },

    getCoupon: (name: "hitesh101", discount: 10) => {
        return 10
    }
}
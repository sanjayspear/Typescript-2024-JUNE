interface UserDetails {
    readonly dbId: number,
    email: string,
    userId: number,
    // Optional
    googleId?: string,

    //startTrail: () => string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface UserDetails {
    githubToken: string
}

interface Admin extends UserDetails {
    role: "admin" | "TL" | "Learner"
}

const Smith: Admin = {
    dbId: 22, 
    email: "h@h.com", 
    userId: 101,
    githubToken: "23145",
    role: "admin",

    startTrail: () => {
        return "trail started"
    },

    getCoupon: (name: "hitesh101", discount: 10) => {
        return 10
    }
}
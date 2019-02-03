class Overpayments {
    constructor(mortgage) {
        this.mortgage = mortgage
        this.numberOfOverpayments = 0
        this.overpaymentTotal = 0
        this.fines = 0
    }

    payment(overpaymentValue) {
        this.numberOfOverpayments += 1
        this.overpaymentTotal += overpaymentValue

        // calculate fines


        // Deduct from capital borrowed
        this.deductFromCapital(overpaymentValue)

    }

    deductFromCapital(overpayment) {
        this.mortgage.capitalBorrowed = Number(this.mortgage.capitalBorrowed - overpayment).toFixed(2)
    }
}

module.exports = Overpayments
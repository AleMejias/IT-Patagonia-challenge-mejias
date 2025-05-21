export interface Transactions {
    id:              string;
    product:         string;
    grossAmount:     number;
    netAmount:       number;
    paymentMethod:   string;
    transactionDate: string;
    details:         TransactionDetails;
}

export interface TransactionDetails {
    cardNumber: string;
    cardHolder: string;
    cardExpiry: string;
    cbu:        string;
}
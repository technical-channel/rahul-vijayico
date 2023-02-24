export const transactionType = `
type Transaction{
   user: String
   transactionNumber:String
   tokens:Float
   usdAmount:Float
   currencyAmount:Float
   currency:String
   toAddress:String
   isPayment:Boolean
   status:String
   type:String
}
type UserTransaction{
    currency:Currency
    user: String
    transactionNumber:String
    tokens:Float
    usdAmount:Float
    currencyAmount:Float
    toAddress:Wallet
    isPayment:Boolean
    status:String
    type:String
}
type GetTransaction {
    user:User
    receivedAmount:String
    toAddress:Wallet
    transactionNumber:String
    tokens:Float
    usdAmount:Float
    currencyAmount:Float
    currency:String
    isPayment:Boolean
    status:String
    type:String
}


type Query{
    getTransactionOfUser(user:String transactionNumber:String): Transaction
    getAllTransactionOfUser(user:String): [UserTransaction]
    getAllTransactionOfReceiveFund(status:String!):[GetTransaction]
}
type Mutation{
    updateTransactionStatus(transactionNumber:String status:String!):Transaction
}

`;

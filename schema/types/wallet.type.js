export const walletType = `
type Wallet{
    walletAddress:String
    currency:String
    privateKey:String
    user:String
}

type Query{
    getWallet(wallet: String! currency:String): Wallet
    getAllWallet(wallet: String!): [Wallet]
}
type Mutation{
    buyToken(currency:String!,user:String!,usdAmount:Float!): Wallet
}
`;

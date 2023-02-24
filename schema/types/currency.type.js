export const currencyType = `
type Currency{
    currency:String
    symbol:String
}

type Query{
    getCurrency(currency: String! symbol:String): Currency
    getAllCurrency: [Currency]
}
type Mutation{
    createCurrency(currency: String! symbol:String!): Currency
}
`;

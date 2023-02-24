export const userType = `
type User{
   email: String
   password: String
   fullName: String
   mobileNumber: String
   countryCode: String
   dob: String
   nationality:String
   receiveToken:String
   isVerified:Boolean
}
type Query{
    getUser(email: String!): User
    loginUser(email: String! password: String!): User
    getAllUsers: [User]

}
type Mutation{
  createUser(email: String!
    password: String!
    fullName: String!
    mobileNumber: String!
    countryCode: String!
    nationality:String!
    ):User
}
`;

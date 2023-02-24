export const stageType = `
type Stage{
   stage: Int
   perTokenPrice:Float
   bonus:Int
   endDate:String
   totalRaisedAmount:Float
   tokenForStage:Float

}

type Query{
    getStage(stage:Int!): Stage
    getAllStages: [Stage]
}
type Mutation{
    createStage(
        stage:Int!
        perTokenPrice:Float!
        bonus:Int
        endDate:String!
        tokenForStage:Float!
    ): Stage
}

`;

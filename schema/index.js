import { currencyResolver } from "./resolvers/currency.resolver.js";
import { userResolver } from "./resolvers/user.resolver.js";
import { stageResolver } from "./resolvers/stage.resolver.js";
import { walletResolver } from "./resolvers/wallet.resolver.js";
import { currencyType } from "./types/currency.type.js";
import { stageType } from "./types/stages.type.js";
import { userType } from "./types/user.type.js";
import { walletType } from "./types/wallet.type.js";
import { transactionResolver } from "./resolvers/transaction.resolver.js";
import { transactionType } from "./types/transaction.type.js";
const types = [userType, currencyType, walletType, stageType, transactionType];
const Resolver = [
  userResolver,
  currencyResolver,
  walletResolver,
  stageResolver,
  transactionResolver,
];

export const schemaDefs = {
  typeDefs: types,
  resolvers: Resolver,
};

import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { schemaDefs } from "./schema/index.js";
import cron from "node-cron";
dotenv.config();

const server = new ApolloServer({
  typeDefs: schemaDefs.typeDefs,
  resolvers: schemaDefs.resolvers,
});

await server.start();
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
  bodyParser.json(),
  expressMiddleware(server)
);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

// cron.schedule("* * * * *", () => {
//   console.log("running a task every minute");
// });

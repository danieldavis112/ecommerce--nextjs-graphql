import express from 'express';
import {graphqlHTTP} from "express-graphql";
// used to initialize express,graphqlhttp is the middleware to create server
import cors from 'cors';
// used to connect react to backend
import { createConnection } from 'typeorm';
import { schema } from './Schema';
import { user } from './Entities/user';
import { order } from './Entities/order';
import { product } from './Entities/product';
import { orderdetails } from './Entities/orderdetails';
import { brand } from './Entities/brand';


// main function starting

const main = async ()=>{
// creating connection
await createConnection({
    type:"mysql",
    database:"wnsc",
    username:"root",
    password:"",
    logging:true,
    synchronize:false,
    entities: [user,order,product,orderdetails,brand],
});

// creating app
const app = express();
app.use(cors());
// to parse json in every request  and to used receive in graphql server
app.use(express.json());
// graphql start,its as only one end point unlike rest
app.use("/graphql",graphqlHTTP({
    schema,
    graphiql: true
    
}))
  app.listen(3001, ()=>{
    console.log("server running on port 3001");
  })
};

main().catch((err)=>
{
    console.log(err);
});
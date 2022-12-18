import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {GET_ALL_USERS,GET_USER_BY_ID} from './Queries/user';
import {CREATE_USER,DELETE_USER} from './Mutations/user';
import { GET_ORDER_BY_ID } from "./Queries/order";
import { GET_ORDER_DETAILS_BY_ID} from "./Queries/orderdetails"
import {GET_ORDER_PRODUCTS} from "./Queries/ordercorresponding"
import {GET_ALL_BRANDS} from "./Queries/brand"

const rootquery = new GraphQLObjectType({
    name: "rootquery",
    fields:{
        getuserbyid:GET_USER_BY_ID,
        getallusers: GET_ALL_USERS,
        getorderbyid:GET_ORDER_BY_ID,
        getorderdetailsbyid:GET_ORDER_DETAILS_BY_ID,
        getorderproducts:GET_ORDER_PRODUCTS,
        getallbrands:GET_ALL_BRANDS
    },
});

const mutation = new GraphQLObjectType({
    name: "mutation",
    fields:{
        createuser:CREATE_USER,DELETE_USER,
    },
});


export const schema = new GraphQLSchema({
    query: rootquery,
    mutation: mutation,
});
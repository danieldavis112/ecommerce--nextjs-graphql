import { GraphQLID, GraphQLList,} from 'graphql';
import {order} from '../../Entities/order';
import { orderdetails } from '../../Entities/orderdetails';
import { ordercorrespondingType } from '../TypeDefs/ordercorresponding';
import { orderdetailsType } from '../TypeDefs/orderdetails';

export const GET_ORDER_PRODUCTS={
    type:new GraphQLList(ordercorrespondingType),
    args:{
       orderid:{type:GraphQLID}
    },
    resolve(parent:any,args:any){
       const orderid=args.orderid;
     return orderdetails.findBy({orderid});  
    },
 
 }
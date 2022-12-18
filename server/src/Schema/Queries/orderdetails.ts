import { GraphQLID, GraphQLList,} from 'graphql';
import { user } from '../../Entities/user';
import {order} from '../../Entities/order';
import { UserType } from '../TypeDefs/User';
import { orderType } from '../TypeDefs/order';
import { orderdetailsType } from '../TypeDefs/orderdetails';
import { orderdetails } from '../../Entities/orderdetails';

export const GET_ORDER_DETAILS_BY_ID={
    type:new GraphQLList(orderdetailsType),
    args:{
       customerid:{type:GraphQLID}
    },
    resolve(parent:any,args:any){
       const customerid=args.customerid;
     return orderdetails.findBy({customerid});  
    },
 
 }

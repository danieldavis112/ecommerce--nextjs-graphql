import { GraphQLID, GraphQLList,} from 'graphql';
import { user } from '../../Entities/user';
import {order} from '../../Entities/order';
import { UserType } from '../TypeDefs/User';
import { orderType } from '../TypeDefs/order';

export const GET_ORDER_BY_ID={
    type:orderType,
    args:{
       id:{type:GraphQLID}
    },
    resolve(parent:any,args:any){
       const id=args.id;
     return order.findOneBy({id});  
    },
 
 }
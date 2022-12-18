import{GraphQLObjectType,GraphQLID,GraphQLString} from 'graphql';
import { UserType } from '../TypeDefs/User';
import { user } from '../../Entities/user';
// import type we only want to use
export const orderType = new GraphQLObjectType({
    name: "order",
    fields: () => ({
        id:{ type:GraphQLID},
        date:{type:GraphQLString},
        customerid:{
             type:UserType,
            resolve(parent,args){
                const id=parent.customerid
                return user.findOneBy({id})
            }
            }
        
    }),
});
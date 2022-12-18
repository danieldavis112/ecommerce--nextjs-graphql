import { UserType } from "../TypeDefs/User";
import { GraphQLID, GraphQLString } from "graphql";
import { user } from '../../Entities/user';

export const CREATE_USER = {
    type:UserType,
    args: {
        name:{type:GraphQLString},
        emailaddress:{type:GraphQLString},
        password:{type:GraphQLString},
        mobilenumber:{type:GraphQLID}
    },
    async resolve(parent:any,args:any){
        const{name,emailaddress, password,mobilenumber} =args;
        await user.insert({ name,emailaddress, password,mobilenumber})
        return args;
    },
}

export const DELETE_USER = {
    type:UserType,
    args: {
        id:{type:GraphQLID},
    },
    async resolve(parent:any,args:any){
        const{id} =args;
        await user.delete({ id})
        return args;
    },
}
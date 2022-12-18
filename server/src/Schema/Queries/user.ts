import { GraphQLID, GraphQLList,} from 'graphql'
import { user } from '../../Entities/user';
import { UserType } from '../TypeDefs/User'

export const GET_ALL_USERS ={
   type: new GraphQLList(UserType),
   resolve(){
    return user.find();  
   },

}
// export const GET_USER_BY_ID ={
//    type:UserType,
//    resolve(){
//       const id=3;
//     return user.findOneBy({id});  
//    },
// }
export const GET_USER_BY_ID ={
   type:UserType,
   args:{
      id:{type:GraphQLID}
   },
   resolve(parent:any,args:any){
      const id=args.id;
    return user.findOneBy({id});  
   },

}

import { GraphQLID, GraphQLList,} from 'graphql'
import { brand } from '../../Entities/brand';
import { brandType } from '../TypeDefs/brands'

export const GET_ALL_BRANDS ={
   type: new GraphQLList(brandType),
   resolve(){
    return brand.find();  
   },

}
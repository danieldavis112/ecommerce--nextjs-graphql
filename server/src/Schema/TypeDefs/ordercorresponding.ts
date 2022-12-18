import{GraphQLObjectType,GraphQLID,GraphQLString, GraphQLList} from 'graphql';
import { productType } from './product';
import { product } from '../../Entities/product';

export const ordercorrespondingType = new GraphQLObjectType({
    name: "ordercorresponding",
    fields: () => ({
        orderid:{ type:GraphQLID},
        orderproductdet:{ 
            type:productType,
            resolve(parent,args)
            {
                 const id=parent.productid
                return product.findOneBy({id})

            }
        }
    }),
});
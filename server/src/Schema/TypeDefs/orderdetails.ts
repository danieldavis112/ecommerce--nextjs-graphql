import{GraphQLObjectType,GraphQLID,GraphQLString, GraphQLList} from 'graphql';
import { order } from '../../Entities/order';
import { orderType } from './order';
import { product } from '../../Entities/product';
import { productType } from './product';

// import type we only want to use
export const orderdetailsType = new GraphQLObjectType({
    name: "orderdetails",
    fields: () => ({
        id:{ type:GraphQLID},
        orderid:{
            type:orderType,
            resolve(parent,args)
            {
                 const id=parent.orderid
                return order.findOneBy({id})

            }
        },
        productid:{ 
            type:productType,
            resolve(parent,args)
            {
                 const id=parent.productid
                return product.findOneBy({id})

            }
        },
        quantity:{ type:GraphQLID},
        price:{ type:GraphQLID},
        total:{ type:GraphQLID},
        customerid:{ type:GraphQLID}
    }),
});
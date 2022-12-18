import{GraphQLObjectType,GraphQLID,GraphQLString} from 'graphql';

// import type we only want to use
export const productType = new GraphQLObjectType({
    name: "product",
    fields: () => ({
        id:{ type:GraphQLID},
        name:{type:GraphQLString},
        price:{ type:GraphQLID},
        image:{type:GraphQLString}

    }),
});
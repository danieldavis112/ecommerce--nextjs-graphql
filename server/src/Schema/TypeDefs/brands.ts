import{GraphQLObjectType,GraphQLID,GraphQLString} from 'graphql';
// import type we only want to use
export const brandType = new GraphQLObjectType({
    name: "brand",
    fields: () => ({
        id:{ type:GraphQLID},
        name:{type:GraphQLString},
        image:{type:GraphQLString}
    }),
});
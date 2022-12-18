import{GraphQLObjectType,GraphQLID,GraphQLString} from 'graphql';
// import type we only want to use
export const UserType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id:{ type:GraphQLID},
        name:{type:GraphQLString},
        emailaddress:{type:GraphQLString},
        password:{type:GraphQLString},
        mobilenumber:{type:GraphQLID}

    }),
});
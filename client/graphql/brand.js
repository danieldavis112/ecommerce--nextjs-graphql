import { gql } from "@apollo/client";
export const GET_ALL_BRANDS=gql`
query getallbrands{
getallbrands{
    id
    name
    image
}  
}
`;
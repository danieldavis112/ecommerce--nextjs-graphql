import { gql} from "@apollo/client";

export const GET_ALL_USERS=gql`
query getallusers {
getallusers{
    name
    emailaddress
    mobilenumber
}  
}
`;
export const GET_USER_BY_ID=gql`
query getuserbyid($id:ID!) {
getuserbyid(
    id: $id
){
    name
    emailaddress
    mobilenumber
}  
}
`;




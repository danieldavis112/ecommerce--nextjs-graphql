import { gql } from "@apollo/client";
export const GET_ORDER_DETAILS_BY_ID = gql`
  query getorderdetailsbyid($id: ID!) {
    getorderdetailsbyid(customerid: $id) {
      id
      orderid {
        id
        date
        customerid {
          name
          emailaddress
          mobilenumber
        }
      }
      productid {
        id
        name
        price
        image
      }
      quantity
      price
      total
    }
  }
`;
export const GET_ORDER_PRODUCTS = gql`
  query getorderproducts($orderid: ID!) {
    getorderproducts(orderid:$orderid){
      orderproductdet{
        id
        name
        price
        image
      }
    }
  }

  
  
`;
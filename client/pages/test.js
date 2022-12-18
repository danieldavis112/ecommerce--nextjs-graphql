import Orderlist from "../components/orderlist";
import Orderdetail from "../components/orderdetail";

import {GET_ORDER_DETAILS_BY_ID,GET_ORDER_PRODUCTS} from '../graphql/order';
import {useQuery} from '@apollo/client';
const test = () => {
    const id=3;
    var orderinfo=[];
    var productinfo=[];
    var customerinfo=[];
    const{data}=useQuery(GET_ORDER_DETAILS_BY_ID,{variables: {id},})
    if(data){
        const {getorderdetailsbyid} = data;
        console.log(getorderdetailsbyid);
        console.log(getorderdetailsbyid[0].orderid.customerid.name);
        console.log(getorderdetailsbyid[0].orderid.customerid.emailaddress);
        console.log(getorderdetailsbyid[0].orderid.customerid.mobilenumber)
    };
       return (
        <>

            {data &&(data.getorderdetailsbyid.map((result)=>{
                console.log(result);
                orderinfo=[result.orderid.id , result.orderid.date];
                productinfo=[result.productid.name,result.productid.price,result.quantity,result.productid.image]
                console.log(orderinfo);
              console.log(productinfo);
                return (<>
                    <Orderdetail data1={ orderinfo}/> 
                    

                    <Orderlist data2={ productinfo}/>    
                    </>)
            }
            )
            )
            }
            </>
       );
            
}
export default test;
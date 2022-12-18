
import styles from "../styles/account.module.css";
import Orderlist1 from "../components/orderlist1";
import Image from "next/image";
import React from "react";
import {GET_ORDER_DETAILS_BY_ID,GET_ORDER_PRODUCTS} from '../graphql/order';
import {useQuery} from '@apollo/client';
function account (){
  const id=3;
    var orderinfo=[];
    var total;
    var tot
    const{data}=useQuery(GET_ORDER_DETAILS_BY_ID,{variables: {id},})
    if(data){
        const {getorderdetailsbyid} = data;
        console.log(getorderdetailsbyid);
        var name=getorderdetailsbyid[0].orderid.customerid.name;
        var email =getorderdetailsbyid[0].orderid.customerid.emailaddress;
        var mobile=getorderdetailsbyid[0].orderid.customerid.mobilenumber
    };
  return (
    <main id={styles.rm}>
      <div id={styles.d1} class="container">
        <div id={styles.rr1} class="row">
          <div id={styles.d2} class="col-sm-3 col-md-3">
            <p className={styles.sb2}>
              <a href="/account">OVERVIEW</a>
            </p>
            <hr />
            <div className={styles.sb1}>
              <p className={styles.sb2}>MY ORDERS</p>
              <p className={styles.sbb1}>
                <a href="/orders">orders</a>
              </p>
            </div>
            <hr />
            <div className={styles.sb1}>
              <p className={styles.sb2}>MY ACCOUNT</p>
              <p className={styles.sbb1}>
                <a href="#">my settings</a>
              </p>
              <p className={styles.sbb1}>
                <a href="#">manage address</a>
              </p>
              <p className={styles.sbb1}>
                <a href="#">saved cards</a>
              </p>
              <p className={styles.sbb1}>
                <a href="#">coupons</a>
              </p>
              <p className={styles.sbb1}>
                <a href="#">notifications</a>
              </p>
            </div>
          </div>
          <div id={styles.d3} class="col-sm-9">
            <div className={styles.d3s1c} class="card">
              <div class="card-body">
               <ul className={styles.d3s4} >
                <li className={styles.d3s4s}> 
                <p>Name</p>
                <p className={styles.d3s112s}>{name}</p>
                </li>
                <li className={styles.d3s4s}> 
                <p>Email Address</p>
                <p className={styles.d3s112s}>{email}</p>
                </li>
                <li className={styles.d3s4s}> 
                <p>Mobile number</p>
                <p className={styles.d3s112s} >{mobile}</p>
                </li>
                <li className={styles.d3s113} class="ml-md-auto" >
                 <a href="#">edit account details</a>
                </li>
               </ul>
              </div>
              </div>
            <h6 className={styles.sectiontitle}>recent orders</h6>

            {data &&(data.getorderdetailsbyid.map((result)=>{
                console.log(result);
                total=result.quantity*result.productid.price;
                orderinfo=[result.orderid.id , result.orderid.date,result.productid.name,result.productid.price,result.quantity,result.productid.image,total];
                console.log(orderinfo);
                return (<>
     
                    <Orderlist1 data2={ orderinfo}/>
                    </>)
            }
            )
            )
            }
            
              <div className={styles.bdcc} class="card-body">
              <a href="#" className={styles.but1}>view all orders </a>
               </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
}
export default account;

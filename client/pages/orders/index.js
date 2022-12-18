import styles from "../../styles/orders.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GET_ALL_USERS} from '../../graphql/query';
import {useQuery} from '@apollo/client';

function orders(){
   const{data}=useQuery(GET_ALL_USERS);
   if(data){
    console.log(data)
  }
  return (
    <>
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
        <h6 className={styles.sectiontitle}>Orders</h6>
            <div className={styles.d3s1c} class="card">
              <div className={styles.bdc} class="card-body">
               <ul className={styles.d3s4} >
                <li className={styles.d3s4s}> 
                <p>order id</p>
                <p className={styles.d3s112s}>408-404404-123</p>
                </li>
                <li className={styles.d3s4s}> 
                <p>order placed</p>
                <p className={styles.d3s112s}>26-09-22</p>
                </li>
                <li className={styles.d3s4s}> 
                <p>total paid</p>
                <p className={styles.d3s112s} >75000</p>
                </li>
                <li className={styles.d3s113} class="ml-md-auto" >
                 <a href="#">Order Details</a>
                </li>
               </ul>
              </div>
              <div className={styles.bdc} class="card-body">
               <div className={styles.bdcs}>
                <div className={styles.sta}>
                <div className={styles.imgs} >
                <img className={styles.imgs1} src="images/swc-2.png" alt="switch"/>
                </div>
                <div className={styles.sta1}>
                <div className={styles.desc1}>
                  <h5 className={styles.prdet1}>Crabtree 10 A Mega Bell</h5>
                  <h6 className={styles.prdet2}>Qty: 2</h6>
                </div>
                  <h5 className={styles.desc2} >₹25000</h5>
                  </div>
                  <div className={styles.sta2}>
                <div className={styles.desc3}>
                  <h6 className={styles.prdet3}>package status</h6>
                  <p className={styles.prdet4}>Shipped</p>
                </div>
                  </div>
                  <div className={styles.sta3}>
                <div className={styles.desc4}>
                  <input id={styles.desc41} type="button" value="Cancel"/>
                  <input id={styles.desc41} type="button" value="Track"/>
                </div>
                  </div>
                </div>
               </div>
              </div>
              <div className={styles.bdc} class="card-body">
               <div className={styles.bdcs}>
                <div className={styles.sta}>
                <div className={styles.imgs} >
                <img className={styles.imgs1} src="images/swc-2.png" alt="switch"/>
                </div>
                <div className={styles.sta1}>
                <div className={styles.desc1}>
                  <h5 className={styles.prdet1}>Havells 25A Motor Starter</h5>
                  <h6 className={styles.prdet2}>Qty: 2</h6>
                </div>
                  <h5 className={styles.desc2} >₹25000</h5>
                  </div>
                </div>
               </div>
              </div>
              <div className={styles.bdclast} class="card-body">
               <div className={styles.bdcs}>
                <div className={styles.sta}>
                <div className={styles.imgs} >
                <img className={styles.imgs1} src="images/swc-2.png" alt="switch"/>
                </div>
                <div className={styles.sta1}>
                <div className={styles.desc1}>
                  <h5 className={styles.prdet1}>Havells 25A Motor Starter</h5>
                  <h6 className={styles.prdet2}>Qty: 2</h6>
                </div>
                  <h5 className={styles.desc2} >₹25000</h5>
                  </div>
                </div>
               </div>
              </div>
              </div>
              <div className={styles.bdcc1} class="card-body">
              <a href="#" className={styles.but1}>SHOW MY OLDER ORDERS </a>
               </div>
        </div>
        </div>
      </div>
    </main>
  </>
  )
}
export default orders;
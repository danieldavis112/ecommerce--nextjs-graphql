import styles from "../styles/account.module.css";
import Image from "next/image";
const orderlist1 = (props) => {
    return (
        <div className={styles.bdc} class="card-body">
               <div className={styles.bdcs}>
                <div className={styles.sta}>
                <ul className={styles.d3s4} >
                <li className={styles.d3s4sn}> 
                <p>order id  :</p>
                <p className={styles.d3s112s}>{props.data2[0]}</p>

                </li>
                <li className={styles.d3s4sn}> 
                <p>order placed  :</p>
                <p className={styles.d3s112s}>{props.data2[1]}</p>
                </li>
               </ul>
                <div className={styles.imgs} >
                <img className={styles.imgs1} src={props.data2[5]} alt="image"/>
                </div>
                <div className={styles.sta1}>
                <div className={styles.desc1}>
                  <h5 className={styles.prdet1}>{props.data2[2]}</h5>
                  <h6 className={styles.prdet2}>Qty: {props.data2[4]}</h6>
                </div>
                  <h5 className={styles.desc2} >₹{props.data2[3]}</h5>
                  </div>
                  <h6 className={styles.desc3}>total:{props.data2[4]} X {props.data2[3]} = {props.data2[6]}</h6>
                </div>
               </div>
              </div>
        );
    }
    export default orderlist1;
import styles from "../styles/brands.module.css"
const brand = (props)=>{
    return(
        <div
              id={styles.border}
              class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 "
            >
              <a href="/account" alt="brandlogo">
                <img
                  id={styles.brandimg}
                  src={props.data[2]}
                //   class="img-fluid"
                />
              </a>
            </div>
    );
};
export default brand;

import styles from "../styles/brands.module.css";
import Brand from "../components/brand";
import Image from "next/image";
import {GET_ALL_BRANDS} from '../graphql/brand';
import {useQuery} from '@apollo/client';
function brands() {
  var brandinfo=[];
  const{data}=useQuery(GET_ALL_BRANDS);
  return (
    <main className={styles.mainstyle}>
      <div className={styles.maindiv} class="container">
        <h3 className={styles.mainhd}>Brands</h3>
        <div id={styles.curvborder} class="container text-center">
          <div id={styles.stylrow} class="row">
          {data &&(data.getallbrands.map((result)=>{
                console.log(result);
                brandinfo=[result.id ,result.name,result.image];
                console.log(brandinfo);
                return (<>
     
                    <Brand data={ brandinfo}/>
                    </>)
            }
            )
            )
            }
            
          </div>
        </div>
        <nav id={styles.pglst} class="text-center">
  <ul id={styles.pglst1} class="pagination">
    <li class="page-item">
      <a id={styles.pglst2} class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a id={styles.pglst2} class="page-link" href="#">1</a></li>
    <li class="page-item"><a id={styles.pglst2} class="page-link" href="#">2</a></li>
    <li class="page-item"><a id={styles.pglst2} class="page-link" href="#">3</a></li>
    <li class="page-item"><a id={styles.pglst2} class="page-link" href="#">4</a></li>
    <li class="page-item">
      <a id={styles.pglst2} class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
      </div>
    </main>
  );
}

export default brands;

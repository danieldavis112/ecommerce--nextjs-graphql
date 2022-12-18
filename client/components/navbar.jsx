import styles from "../styles/navbar.module.css";
import Image from "next/image";

const navbar = () => {
  return (
    <div className={styles.container}>
      <div id={styles.r1} class="row">
        <nav id="ao" class="navbar navbar-expand-lg justify-content-start  bg-primary">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav justify-content-between w-100">
              <li class="nav-item dropdown">
                <a
                  class="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  shop by category
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/brands">
                  brand
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  sale
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  help
                </a>
              </li>
            </ul>
          </div>

          <a id="navbar-brand1" class="navbar-brand" href="#">
            <Image id="navbar-brand2"
              src="/images/logbg.png"
              alt="Logo"
              width="100px"
              height="55px"
            />
          </a>
          <div class="navbar-nav">
            <form id="hform" class="d-flex">
              <input
                class="form-control"
                type="search"
                placeholder="what are you looking for?"
                aria-label="what are you looking for?"
              ></input>
              <button class="btn search-btn" type="submit">
                <img
                  src="/icons/searc-icon.svg"
                  alt="What are you looking for?"
                />
              </button>
            </form>
          </div>
          <div class="scr1">
          <div id="mvr" class="header-right d-flex align-items-center ">
            <ul id="mmvl" class="center-menu d-flex  ">
              <li class="ritem">
                <a id="ad" href="/account" class="rlink">
                <i  className="fa-regular fa-user"></i>
                <span class="rlink1">Account</span>
                </a>
              </li>
              <li class="ritem">
                <a id="ad" href="" class="rlink">
                <i className="fa-regular fa-lightbulb"></i>
                <span class="rlink1">wishlist</span>
                </a>
              </li>
              <li class="ritem">
                <a id="ad" href="" class="rlink">
                <i className="fa-solid fa-cart-shopping"></i>
                <span class="rlink1">cart</span>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default navbar;

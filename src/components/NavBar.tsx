import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import LogoBook from "../assets/BookLogo.png";
import myprofile from "../assets/Feb-2023_avartar.jpg";
import { GiBookshelf } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./context/bookContext.js";
import { Book } from "../services/book-service.js";
import { useThemeContext } from "../hooks/useThemeContext.js";
import ThemeSwitch from "./ThemeSwitch.js";

// interface Props {
//   onProfileClick: () => void;
// }
const NavBar = () => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useThemeContext();

  const switchTheme = () => setDarkMode((prev) => !prev);

  const { favorites, AddToFavorites, RemoveFromFavorites } =
    useAppContext() as Book[];

  useEffect(() => {
    darkMode
      ? document.documentElement.setAttribute("darkMode", "")
      : document.documentElement.removeAttribute("darkMode", "");
  }, [darkMode]);

  return (
    <>
      <div className="container-fluid bg-success d-flex justify-content-between">
        <div className="p-3 Logo" onClick={() => navigate("/")}>
          {/* <img src={LogoBook} alt="Logo" width={"90px"} height={"60px"} /> */}
          <GiBookshelf style={{ width: "80px", height: "50px" }} />
          <span className="text-uppercase fw-bold fs-5">bookhub</span>
        </div>
        <div className="w-50 p-4">
          <SearchBar />
        </div>
        <div className="p-3">
          <div className="hstack">
            <button
              type="button"
              className="btn btn-success me-5 position-relative"
              onClick={() => navigate("/bookcart")}
            >
              <FiShoppingCart
                style={{ width: "35px", height: "35px" }}
                className=""
              />
              <span className="position-absolute top-0 start-200 badge rounded-pill bg-danger fs-6">
                {favorites.length > 0 ? favorites.length : ""}
              </span>
            </button>
            <img
              className="rounded"
              src={myprofile}
              alt="Logo"
              width={"50px"}
              height={"50px"}
              // onClick={() => navigate("/myprofile")}
              // onClick={onProfileClick}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            />

            <div
              className="offcanvas offcanvas-end"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabIndex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="text-end">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-header position-relative">
                <div className="vstack">
                  <div className="hstack gap-3">
                    <img
                      className="rounded"
                      src={myprofile}
                      alt="Logo"
                      width={"100px"}
                      height={"100px"}
                      // onClick={() => navigate("/myprofile")}
                      // onClick={onProfileClick}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasScrolling"
                      aria-controls="offcanvasScrolling"
                    />
                    <div className="vstack">
                      <span className="fw-bold fs-4 text-uppercase">
                        Thang Truong
                      </span>
                      <span className="fw-bold fs-6">FrontEnd Developer</span>
                      <span className="fw-bold fs-6">
                        thangtruong1808@gmail.com
                      </span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <span className="mx-3 fw-bold fs-5">Education</span>
              <ul>
                <li>Swinburne University of Technology</li>
              </ul>
              <span className="mx-3 fw-bold fs-5">Skills</span>
              <ul className="">
                <li>Responsive Websites</li>
                <li>JavaScript (ReactJS and VueJS)</li>
                <li>PHP and NodeJS</li>
                <li>SoftWare Development for Mobile - Kotlin</li>
                <li>AWS Architecture Cloud</li>
                <li>MySQL, SQL and MongoDB</li>
              </ul>
              <span className="mx-3 fw-bold fs-5">Favorites</span>
              <ul>
                <li>Swimming</li>
                <li>Badminton</li>
                <li>BBQ</li>
                <li>Camping</li>
              </ul>

              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

import React from "react";
import Logo from "../assets/logo.png";
import LogoBook from "../assets/BookLogo.png";
import myprofile from "../assets/Feb-2023_avartar.jpg";
import { GiBookshelf } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./context/bookContext.js";
import { Book } from "../services/book-service.js";

const NavBar = () => {
  const navigate = useNavigate();
  const { favorites, AddToFavorites, RemoveFromFavorites } =
    useAppContext() as Book[];

  return (
    <>
      <div className="container-fluid bg-success d-flex justify-content-between">
        <div className="p-3 Logo" onClick={() => navigate("/")}>
          {/* <img src={LogoBook} alt="Logo" width={"90px"} height={"60px"} /> */}
          <GiBookshelf style={{ width: "90px", height: "60px" }} />
          <span className="text-uppercase fw-bold fs-4">bookhub</span>
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
                style={{ width: "40px", height: "40px" }}
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

import React from "react";
import myprofile from "../assets/Feb-2023_avartar.jpg";

import { TfiMenu } from "react-icons/tfi";
import { LuMenuSquare } from "react-icons/lu";
import AsideBar from "./AsideBar";
import { GiBookshelf } from "react-icons/gi";

interface Props {
  // genres: Genre[];
  onSelectedGenres: (genres: string[]) => void;
}

const GenreMenu = ({ onSelectedGenres }: Props) => {
  return (
    <>
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <TfiMenu style={{ width: "40px", height: "40px", cursor: "pointer" }} />

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="static"
          tabIndex={0}
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="text-end mt-3 mx-3">
            <button
              type="button"
              className="btn-close btn btn-outline-primary"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-header">
            <div className="vstack p-0 m-0">
              <div className="hstack gap-3">
                <h5 className="offcanvas-title" id="staticBackdropLabel">
                  <GiBookshelf
                    style={{ width: "70px", height: "70px", color: "green" }}
                  />
                  <span className="text-uppercase fw-bold fs-3">bookhub</span>
                </h5>
              </div>
              <hr />
            </div>
          </div>
          <div className="offcanvas-body">
            <AsideBar onSelectedGenres={onSelectedGenres} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GenreMenu;

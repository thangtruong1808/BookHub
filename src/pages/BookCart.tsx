import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Book } from "../services/book-service";
import { useAppContext } from "../components/context/bookContext";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BookCart = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { favorites, AddToFavorites, RemoveFromFavorites } =
    useAppContext() as Book[];

  // ----------- Handle Input Filter -----------
  const HandleOnSearchInPut = (searchText: string) => {
    setQuery(searchText);
  };
  const HandleOnSelectedGenres = () => {
    console.log("");
  };
  return (
    <>
      <NavBar
        onSearch={HandleOnSearchInPut}
        onSelectedGenres={HandleOnSelectedGenres}
      />
      <div className="d-flex justify-content-center container mt-5 text-danger  text-center">
        {favorites.length === 0 ? (
          <div className="flex-column mb-5 fw-bold fs-2">
            <span>Your Cart is empty</span>
            <button
              className="btn btn-dark mt-5 d-flex justify-content-center"
              style={{ width: "280px" }}
              onClick={() => navigate("/")}
            >
              Continue to browse
            </button>
          </div>
        ) : (
          <div className="container">
            <h1 className="text-center fw-bold fs-2 mt-5 text-danger ">
              Your Cart
            </h1>
            <div className="container mt-3">
              <table className="table table-bordered ">
                <thead className="table-dark text-center">
                  <tr>
                    <th>ID</th>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Authors</th>
                    <th>Edition</th>
                    <th>Num_Pages</th>
                    <th>Genres</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {favorites.sort().map((unit: Book) => (
                    <tr key={unit.id}>
                      <td className="text-center">{unit.id}</td>
                      <td>
                        <img
                          src={unit.image_url}
                          alt={unit.title}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{unit.title}</td>
                      <td className="text-center">{unit.authors}</td>
                      <td className="text-center">
                        {unit.edition.length === 0 ? "N/A" : unit.edition}
                      </td>
                      <td className="text-center">{unit.num_pages}</td>
                      <td>{unit.genres as unknown as []}</td>
                      <td className="text-center">
                        {unit.rating}
                        <AiFillStar className="text-warning fs-3 mb-1" />
                      </td>

                      <td className="hstack justify-content-evenly">
                        <button
                          className="btn btn-danger btn-sm"
                          // onClick={() => onDelete(unit.id)}
                          onClick={() => RemoveFromFavorites(unit.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" className="fw-bold fs-4">
                      Total:
                    </td>
                    <td
                      colSpan="7"
                      className="text-danger text-start fw-bold fs-4"
                    >
                      <span>{favorites.length} items</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookCart;

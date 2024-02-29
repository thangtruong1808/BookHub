import React from "react";
import { useAppContext } from "./context/bookContext.js";

import { Link } from "react-router-dom";

import { Book } from "../services/book-service";
import { AiFillStar } from "react-icons/ai";

interface BookCard {
  book: Book;
  // onDetail: (id: number) => void;
}
const BookCard = ({ book }: BookCard) => {
  // console.log("book.genres: " + book.genres);

  const { favorites, AddToFavorites, RemoveFromFavorites } =
    useAppContext() as Book[];

  const favoritesChecker = (id: number) => {
    const boolean = favorites.some((book: Book) => book.id === id);
    return boolean;
  };
  return (
    <>
      <div
        className="rounded-4  mycard col p-0 mb-3 shadow-lg position-relative"
        // style={{ width: "15rem", height: "380px" }}
      >
        <Link to={"/book/" + book.id}>
          <img
            className="rounded-top-4"
            src={book.image_url}
            alt={book.title}
            // style={{ width: "15rem", height: "200px" }}
          />
        </Link>

        <p className="fw-bold text-center m-1">{book.title}</p>
        <p className="mx-2 m-1">
          Author:
          <span className="fw-bold badge rounded-pill text-bg-info mx-2">
            {book.authors}
          </span>
        </p>
        <p className="mx-2 m-1">No pages: {book.num_pages}</p>
        <p className="mx-2 m-1">
          Rating: {book.rating}
          <AiFillStar className="text-warning fs-4 mb-1" />
        </p>
        <div className="">
          {favoritesChecker(book.id) ? (
            <button
              className="p-2 fw-bold rounded-bottom-4 position-absolute bottom-0 w-100 btn btn-danger btn-sm"
              onClick={() => RemoveFromFavorites(book.id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="p-2 fw-bold rounded-bottom-4 position-absolute bottom-0 w-100 btn btn-primary btn-sm"
              onClick={() => AddToFavorites(book)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BookCard;

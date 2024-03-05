import React from "react";
// import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import { Book } from "../services/book-service";
// interface BookGridProps {
//   error: string[];
//   isLoading: boolean;
//   books: BookProps[];
// }

interface Props {
  books: Book[];
  isLoading: boolean;
}
const BookGrid = ({ books, isLoading }: Props) => {
  // const { books, error, isLoading, setError, setBooks } = useBooks();
  //   if (error) return onHandleError(error);
  return (
    <>
      {/* {error && <h5 className="text-danger"> {error}</h5>} */}
      {isLoading && (
        <div className="w-50 mb-5">
          <span className="spinner-border "></span>
          <br />
          <span className="fw-bold fs-6 w-50 mt-5">
            Loading in progress, please wait . . .
          </span>
        </div>
      )}
      {!isLoading && books.length === 0 ? (
        <div
          className="text-uppercase fs-6 fw-bold text-danger mt-5 w-50"
          // style={{ width: "550px" }}
        >
          Sorry, No books found, Please update filters.
        </div>
      ) : (
        ""
      )}
      {/* {books.length === 0 && (
        <div className="text-uppercase fs-5 fw-bold text-danger mt-5">
          Please update filters .
        </div>
      )} */}
      {books.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </>
  );
};

export default BookGrid;

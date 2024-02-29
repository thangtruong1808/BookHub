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
      {isLoading && <div className="spinner-border"></div>}
      {books.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </>
  );
};

export default BookGrid;

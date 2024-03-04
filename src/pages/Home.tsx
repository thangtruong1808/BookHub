import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import AsideBar from "../components/AsideBar";
import BookList from "../components/BookGrid";
import useBooks from "../hooks/useBooks";
import { Book } from "../services/book-service";

const Home = () => {
  const { books, error, isLoading, setError, setBooks } = useBooks();
  const [genresSelected, setSelectedFilterGenres] = useState<Book[]>([]);
  const [filteredItems, setFilteredItems] = useState<Book[]>(books);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("INITIAL filteredItems: " + books.length);
    FilteredData(books, query);
    // FilterGenres();
  }, [books, genresSelected, query]);

  const HandleUpdateSelectedGenres = (genres: Book[]) => {
    setSelectedFilterGenres(genres);
  };

  // ----------- Handle Input Filter -----------
  const HandleOnSearchInPut = (searchText: string) => {
    setQuery(searchText);
    FilteredData(books, searchText);
  };

  const FilteredData = (books: Book[], searchText: string) => {
    let filteredBooks = books;
    // Filtering Input Items
    if (searchText) {
      const filteredItemsInput = books.filter(
        (book) =>
          book.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
      filteredBooks = filteredItemsInput;
      setFilteredItems(filteredBooks);
    }
    if (!searchText) {
      setFilteredItems(filteredBooks);
    }
    // Applying Genre filter
    if (genresSelected.length > 0) {
      let tempest: Book[] = [];
      genresSelected.forEach((e) => {
        filteredBooks.filter((book) => {
          if (book.id) {
            if (book.genres.indexOf(e) !== -1) {
              if (!tempest.includes(book.id)) {
                tempest.push(book);
              }
            }
          }
        });
      });

      // console.log(removeDUplicates(tempest));
      setFilteredItems(removeDUplicates(tempest));
    }
  };

  // remove duplicates object
  function removeDUplicates(data: Book[]) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  return (
    <>
      <NavBar onSearch={HandleOnSearchInPut} />
      <div className="container-xxl mt-5">
        <div className="container text-center fs-5 fw-bold  mb-3">
          <span className="text-danger">
            {filteredItems.length > 0 && (
              <span>Total: {filteredItems.length} Books</span>
            )}
          </span>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-2 vh-100 d-none d-lg-block text-center border-end">
            <AsideBar onSelectedGenres={HandleUpdateSelectedGenres} />
          </div>
          <div className="col-lg-10 row row-cols-4 justify-content-evenly p-0">
            <BookList books={filteredItems} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

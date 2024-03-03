import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import AsideBar from "../components/AsideBar";
import BookList from "../components/BookGrid";
import useBooks from "../hooks/useBooks";
import { Book } from "../services/book-service";

const Home = () => {
  const { books, error, isLoading, setError, setBooks } = useBooks();
  const [genresSelected, setSelectedFilterGenres] = useState<Book[]>([]);
  const [toogleProfilePage, setToogleProfilePage] = useState(false);
  const [filteredItems, setFilteredItems] = useState(books);
  const [query, setQuery] = useState("");

  useEffect(() => {
    FilteredData(books, "");
    filterItems();
    // setFilteredItems(books);
  }, [books, genresSelected]);

  // useEffect(() => {
  //   filterItems();
  // }, [genresSelected, books]);

  const HandleUpdateSelectedGenres = (genres: Book[]) => {
    setSelectedFilterGenres(genres);
  };

  // Filtering Genre
  const filterItems = () => {
    if (genresSelected.length > 0) {
      const tempItems = genresSelected.map((genre) => {
        const temp = filteredItems.filter((book) =>
          book.genres.includes(genre)
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...books]);
    }
  };

  // ----------- Handle Input Filter -----------
  const HandleOnSearchInPut = (searchText: string) => {
    setQuery(searchText);
    FilteredData(books, searchText);
  };

  // const filteredItemsInput = books.filter(
  //   (book) => book.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

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
      console.log("Refresh");
      setFilteredItems(books);
    }
    // Filtering Genre
    // if (genresSelected.length > 0) {
    //   const tempItems = genresSelected.map((genre) => {
    //     const temp = filteredItems.filter((book) =>
    //       book.genres.includes(genre)
    //     );
    //     return temp;
    //   });
    //   setFilteredItems(tempItems.flat());
    // }
  };
  // FilteredData(books, query);
  return (
    <>
      <NavBar onSearch={HandleOnSearchInPut} />
      <div className="container-xxl mt-5">
        {/* <div className="container text-center fs-2 fw-bold text-danger mb-3">
          Total:{" "}
          <span className="">
            {genresSelected.length > 0 ? filteredItems.length : books.length}{" "}
            books
          </span>
        </div> */}
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

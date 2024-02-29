import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    filterItems();
    // console.log("genres: " + genresSelected);
    // console.log("books.length: " + books.length);
  }, [genresSelected, books]);

  const HandleUpdateSelectedGenres = (genres: Book[]) => {
    setSelectedFilterGenres(genres);
  };

  const filterItems = () => {
    if (genresSelected.length > 0) {
      const tempItems = genresSelected.map((genre) => {
        // console.log("genre: " + genre);
        // console.log("genre.genres: " + genre.genres);
        // console.log("-------------------------------------");
        const temp = books.filter((book) => book.genres.includes(genre));
        return temp;
      });
      // console.log("tempItems: " + tempItems);
      setFilteredItems(tempItems.flat());
    } else {
      // console.log("originalBooks: " + originalBooks.length);
      setFilteredItems([...books]);
    }
  };

  // const HandleOnProfilePage = () => {
  //   setToogleProfilePage(true)
  // }

  return (
    <>
      <NavBar />
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

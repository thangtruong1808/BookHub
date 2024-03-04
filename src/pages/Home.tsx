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

  // Filtering Genre
  const FilterGenres = () => {
    // if (genresSelected.length > 0) {
    //   let tempest: Book[] = [];
    //   console.log("tempest.length: " + tempest.length);
    //   genresSelected.forEach((genre) => {
    //     console.log("genre: " + genre);
    //     books.filter((book) => {
    //       if (book.genres) {
    //         if (book.genres.indexOf(genre) !== -1) {
    //           if (!tempest.includes(book)) {
    //             console.log("you are here");
    //             tempest.push(book);
    //           } else {
    //             tempest.forEach((e) => {
    //               if (book.id !== e.id) {
    //                 console.log("you are here 2");
    //                 tempest.push(book);
    //               }
    //             });
    //           }
    //         }
    //       }
    //     });
    //   });
    //   console.log("tempest: " + tempest);
    //   tempest.forEach((e) => console.log(e.id));
    //   // console.log("-------------------------------------------");
    //   console.log("tempest.length 2: " + tempest.length);
    //   setFilteredItems(tempest);
    // }
    // if (genresSelected.length > 0) {
    //   let tempItems = genresSelected.map((genre) => {
    //     const temp = filteredItems.filter((book) => {
    //       if (book.genres) {
    //         book.genres.includes(genre);
    //       }
    //     });
    //     console.log("tempItems: " + tempItems);
    //   });
    //   // setFilteredItems(tempItems.flat());
    //   // setFilteredItems(tempItems);
    //   console.log("filteredItems.length: " + filteredItems.length);
    // } else {
    //   setFilteredItems([...books]);
    // }
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
      // setFilteredItems(books);
      setFilteredItems(filteredBooks);
      // console.log("filteredBooks.length: " + filteredBooks.length);
      // console.log("filteredItems.length: " + filteredItems.length);
    }

    // Applying Genre filter
    if (genresSelected.length > 0) {
      // console.log("genresSelected: " + genresSelected);
      // console.log("selectedFilters.length: " + genresSelected.length);
      // console.log("filteredItems.length 2: " + filteredItems.length);
      // console.log("---------------------------------------------------");

      let tempest: Book[] = [];
      genresSelected.forEach((e) => {
        // console.log("filteredItems.length 3: " + filteredItems.length);
        // console.log("filteredBooks.length 3: " + filteredBooks.length);

        filteredBooks.filter((book) => {
          if (book.id) {
            // console.log("-----We success up to here-----");
            // console.log("book.genres: " + book.id + "-" + book.genres);
            if (book.genres.indexOf(e) !== -1) {
              // console.log("you are here 2");
              // only 1 checkbox will add the book contained it's genre

              if (!tempest.includes(book.id)) {
                tempest.push(book);
                // console.log("----- You added the book: " + book.id);
              }
            }
          }
        });
      });

      console.log(removeDUplicates(tempest));
      setFilteredItems(removeDUplicates(tempest));
    }
  };

  function removeDUplicates(data: Book[]) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  return (
    <>
      <NavBar onSearch={HandleOnSearchInPut} />
      <div className="container-xxl mt-5">
        <div className="container text-center fs-5 fw-bold text-danger mb-3">
          Total:{" "}
          <span className="">
            {filteredItems.length > 0 ? filteredItems.length : books.length}{" "}
            Books
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

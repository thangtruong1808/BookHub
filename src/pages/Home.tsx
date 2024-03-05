import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import AsideBar from "../components/AsideBar";
import BookList from "../components/BookGrid";
import useBooks from "../hooks/useBooks";
import { Book } from "../services/book-service";
import AuthorFilter from "../components/AuthorFilter";
import SearchBar from "../components/SearchBar";
import genres from "../data/genres";

const Home = () => {
  const { books, isLoading } = useBooks();
  const [genresSelected, setSelectedFilterGenres] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<Book[]>([]);
  const [query, setQuery] = useState("");

  const [selectedAuthor, setSelectedAuthor] = useState("");

  useEffect(() => {
    FilteredData(books, query);
  }, [books, genresSelected, query, selectedAuthor]);

  // const HandleUpdateSelectedGenres = (genres: string[]) => {
  //   setSelectedFilterGenres(genres);
  // };

  const FilteredData = (books: Book[], searchText: string) => {
    let filteredBooks: Book[] = books;
    // Filtering Input Items
    if (searchText) {
      console.log("You called SearchTextInPut");
      const filteredItemsInput = filteredBooks.filter(
        (book) =>
          book.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
      filteredBooks = filteredItemsInput;
      // START search Genre
      if (genresSelected.length > 0) {
        const tempest: Book[] = [];
        genresSelected.forEach((e) => {
          filteredBooks.filter((book) => {
            if (book) {
              if (book.genres.indexOf(e) !== -1) {
                if (!tempest.includes(book)) {
                  tempest.push(book);
                  // Filter from the 2nd book and will add if already exist
                } else {
                  tempest.push(book);
                }
              }
            }
          });
        });
        const result = removeDUplicates(tempest);
        // Author Filter
        if (selectedAuthor) {
          const res = result.filter((book) => book.authors === selectedAuthor);
          setFilteredItems(res);
        } else {
          setFilteredItems(result);
        }
      } else {
        if (selectedAuthor) {
          const res = filteredBooks.filter(
            (book) => book.authors === selectedAuthor
          );
          setFilteredItems(res);
        } else {
          setFilteredItems(filteredBooks);
        }
      }
      // END search Genre
    }
    if (!searchText) {
      console.log("You are here NOT SEARCHTEXT");
      // START search Genre
      if (genresSelected.length > 0) {
        const tempest: Book[] = [];
        genresSelected.forEach((e) => {
          filteredBooks.filter((book) => {
            if (book) {
              if (book.genres.indexOf(e) !== -1) {
                if (!tempest.includes(book)) {
                  tempest.push(book);
                  // Filter from the 2nd book and will add if already exist
                } else {
                  tempest.push(book);
                }
              }
            }
          });
        });
        const result = removeDUplicates(tempest);
        // Author Filter
        if (selectedAuthor) {
          const res = result.filter((book) => book.authors === selectedAuthor);
          setFilteredItems(res);
        } else {
          setFilteredItems(result);
        }
      } else {
        if (selectedAuthor) {
          const res = books.filter((book) => book.authors === selectedAuthor);
          setFilteredItems(res);
        } else {
          setFilteredItems(books);
        }
      }
      // END search Genre
    }
  };

  // remove duplicates object
  function removeDUplicates(data: Book[]) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  // filteredItems.forEach((e) => console.log(e));
  return (
    <>
      <NavBar
        onSearch={(searchText) => setQuery(searchText)}
        onSelectedGenres={(genres) => setSelectedFilterGenres(genres)}
      />
      <div className="container-xxl">
        <div className="d-lg-none d-md-block mt-3 w-100 me-5">
          {/* <SearchBar onSearch={HandleOnSearchInPut} /> */}
          <SearchBar onSearch={(searchText) => setQuery(searchText)} />
        </div>
        <div className="fw-bold fs-5 mt-3 mx-5 mb-2 text-capitalize ">
          Filter by Author Name
        </div>
        <div className="w-50 justify-content-center mx-5">
          <AuthorFilter
            onSelectedAuthor={(author) => setSelectedAuthor(author)}
          />
        </div>
      </div>
      <hr />
      <div className=" text-center fs-5 fw-bold mb-3 mx-5">
        {filteredItems.length > 0 && (
          <span>Total: {filteredItems.length} Books</span>
        )}
      </div>
      {/* <hr /> */}
      <div className="container-xxl mt-2">
        <div className="row justify-content-center">
          <div className="col-lg-2 d-none d-lg-block text-center border-end">
            <AsideBar
              onSelectedGenres={(genres) => setSelectedFilterGenres(genres)}
            />
          </div>
          <div className="col-12 col-lg-10 row row-cols-4 justify-content-around">
            <BookList books={filteredItems} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

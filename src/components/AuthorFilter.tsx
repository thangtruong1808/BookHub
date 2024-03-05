import React, { useEffect, useState } from "react";
import { Book } from "../services/book-service";
import useBooks from "../hooks/useBooks";

interface Props {
  onSelectedAuthor: (author: string) => void;
}

const AuthorFilter = ({ onSelectedAuthor }: Props) => {
  const { books } = useBooks();
  const [authors, setAuthors] = useState<string[]>([]);

  useEffect(() => {
    FilteredAuthorsFunction();
  }, [books]);

  const FilteredAuthorsFunction = () => {
    const filteredAuthors: string[] = [];
    books.map((book) => {
      if (book.authors) {
        filteredAuthors.push(book.authors);
      }
    });
    setAuthors(filteredAuthors);
  };
  // remove duplicates object
  function removeDUplicates(data: string[]) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  const finalResult = removeDUplicates(authors);
  return (
    <select
      className="form-select"
      // multiple

      onChange={(event) => onSelectedAuthor(event.target.value)}
    >
      <option value="">Select Favorite Author </option>
      {finalResult.map((author, index) => (
        <option key={index} value={author}>
          {author}
        </option>
      ))}
    </select>
  );
};

export default AuthorFilter;

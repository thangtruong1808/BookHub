import React, { useEffect, useState } from "react";

interface Props {
  onSelectedAuthors: (authors: string[]) => void;
}

const AuthorFilter = ({ onSelectedAuthors }: Props) => {
  const [selectedFilterAuthor, setSelectedFilterAuthor] = useState<string[]>(
    []
  );

  const [authors, setAuthors] = useState([
    "Young Adult",
    "Fiction",
    "Dystopia",
    "Fantasy",
    "Science Fiction",
    "Historical",
    "Historical Fiction",
    "Academic",
    "School",
    "Romance",
    "Paranormal",
    "Vampires",
    "Literature",
    "Politics",
    "Novels",
  ]);

  useEffect(() => {
    UpdateSelectedAuthors();
  }, [selectedFilterAuthor]);

  const handleSelectedAuthors = (author: string) => {
    if (selectedFilterAuthor.includes(author)) {
      const filters = selectedFilterAuthor.filter(
        (element) => element !== author
      );
      setSelectedFilterAuthor(filters);
    } else {
      setSelectedFilterAuthor([...selectedFilterAuthor, author]);
    }
  };

  const UpdateSelectedAuthors = () => {
    onSelectedAuthors(selectedFilterAuthor);
  };

  return (
    <>
      <div>
        {authors.sort().map((author, index) => (
          <div
            className={
              selectedFilterAuthor.includes(author)
                ? "btn btn-primary p-2 mb-2 mx-1 fw-bold text-dark "
                : "btn btn-outline-primary p-2 mb-2 mx-1"
            }
            key={index}
            style={{ width: "150px" }}
            onClick={() => handleSelectedAuthors(author)}
          >
            {author}
          </div>
        ))}
      </div>
    </>
  );
};

export default AuthorFilter;

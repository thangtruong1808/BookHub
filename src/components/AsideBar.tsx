import { useEffect, useState } from "react";
import { Book } from "../services/book-service";
// import genres from "../data/genres";

interface Genre {
  name: string;
}
interface Props {
  // genres: Genre[];
  onSelectedGenres: (genres: Book[]) => void;
}
const AsideBar = ({ onSelectedGenres }: Props) => {
  const [selectedFilterGenres, setSelectedFilterGenres] = useState<Book[]>([]);
  const [allGenres, setAllGenres] = useState([
    "Childrens",
    "Classics",
    "Young Adult",
    "Fiction",
    "Dystopia",
    "Fantasy",
    "Science Fiction",
    "Historical",
    "Academic",
    "School",
    "Romance",
    "Paranormal",
    "Vampires",
    "Literature",
    "Politics",
    "Novels",
    "Read For School",
  ]);
  const handleFilterGenre = (genre: Book) => {
    if (selectedFilterGenres.includes(genre)) {
      const filters = selectedFilterGenres.filter(
        (element) => element !== genre
      );
      setSelectedFilterGenres(filters);
    } else {
      setSelectedFilterGenres([...selectedFilterGenres, genre]);
    }
  };

  const UpdateSelectedGenres = () => {
    // alert("UpdateSelectedGenres: " + selectedFilterGenres);
    onSelectedGenres(selectedFilterGenres);
  };
  useEffect(() => {
    UpdateSelectedGenres();
  }, [selectedFilterGenres]);

  return (
    <>
      <div className="fw-bold text-uppercase">Advance Filter</div>
      <hr />
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Genres
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            {allGenres.sort().map((item, index) => (
              <div
                className="accordion-body hstack form-check ms-4"
                key={index}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={item}
                  onClick={() => handleFilterGenre(item)}
                />
                <label className="form0check-label ms-1" htmlFor={item}>
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AsideBar;

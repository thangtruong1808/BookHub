import { useEffect, useState } from "react";
import { Book } from "../services/book-service";
// import genres from "../data/genres";

// interface Genre {
//   name: string;
// }
interface Props {
  // genres: Genre[];
  onSelectedGenres: (genres: string[]) => void;
}
const AsideBar = ({ onSelectedGenres }: Props) => {
  const [classes, setClasses] = useState("");
  const [selectedFilterGenres, setSelectedFilterGenres] = useState<string[]>(
    []
  );
  const [allGenres, setAllGenres] = useState([
    "Childrens",
    "Contemporary",
    "Classics",
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
    "Read For School",
  ]);

  useEffect(() => {
    UpdateSelectedGenres();
  }, [selectedFilterGenres]);

  const handleFilterGenre = (genre: string) => {
    if (selectedFilterGenres.includes(genre)) {
      const filters = selectedFilterGenres.filter(
        (element) => element !== genre
      );
      setSelectedFilterGenres(filters);
      onSelectedGenres(selectedFilterGenres);
    } else {
      setSelectedFilterGenres([...selectedFilterGenres, genre]);
      onSelectedGenres(selectedFilterGenres);
    }
  };

  const UpdateSelectedGenres = () => {
    onSelectedGenres(selectedFilterGenres);
  };

  return (
    <>
      <div className="fw-bold text-uppercase">Advanced Filter</div>
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
              <span className="fw-bold fs-5 text-center text-dark">Genres</span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse collapse show"
            data-bs-parent="#accordionFlushExample"
          >
            {allGenres.sort().map((item, index) => (
              <div
                className="form-check accordion-body hstack form-check ms-4 "
                key={index}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={item}
                  value={item}
                  onClick={() => handleFilterGenre(item)}
                  // onChange={() => StyleGenreSelected(item)}
                />
                <label
                  // className="form-check-label ms-1"
                  className={
                    selectedFilterGenres.includes(item)
                      ? "form-check-label ms-2 fw-bold text-danger "
                      : "form-check-label ms-2 "
                  }
                  htmlFor={item}
                >
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

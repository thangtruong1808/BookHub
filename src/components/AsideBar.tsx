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
  const [selectedFilterGenres, setSelectedFilterGenres] = useState<string[]>(
    []
  );
  const [selectedGenre, setSelectedGenre] = useState<string>("");
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
    console.log("------- you called AsideBar -------");
    UpdateSelectedGenres();
  }, [selectedFilterGenres]);

  const handleFilterGenre = (genre: string) => {
    console.log("--- You clicked  ---");

    if (selectedFilterGenres.includes(genre)) {
      const filters = selectedFilterGenres.filter(
        (element) => element !== genre
      );
      setSelectedFilterGenres(filters);
      setSelectedGenre(genre);
      // onSelectedGenres(selectedFilterGenres);
    } else {
      setSelectedFilterGenres([...selectedFilterGenres, genre]);
      setSelectedGenre(genre);
      // onSelectedGenres(selectedFilterGenres);
    }
  };

  const UpdateSelectedGenres = () => {
    onSelectedGenres(selectedFilterGenres);
    console.log("selectedFilterGenres 3: " + selectedFilterGenres);
  };
  console.log("selectedFilterGenres: " + selectedFilterGenres);
  console.log("selectedGenre: " + selectedGenre);
  console.log(
    "---------------------------------------------------------------------"
  );

  // const myClass = (genre: string) => {
  //   selectedFilterGenres.forEach((e) => {
  //     e === genre
  //       ? "className = `form-check-label ms-2 fw-bold text-danger`"
  //       : "className = `form-check-label ms-2`";
  //   });
  // };
  return (
    <>
      <div className="fw-bold text-uppercase">Advanced Filter</div>
      <hr />
      <div className="accordion" id="accordionExample">
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="fw-bold fs-5 text-center text-dark">Genres</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="myApp accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            {allGenres.sort().map((genre, index) => (
              <div
                className="form-check accordion-body hstack form-check ms-4 "
                key={index}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={genre}
                  value={genre}
                  onClick={() => handleFilterGenre(genre)}
                />
                <label
                  // className="form-check-label ms-1"
                  className={
                    selectedFilterGenres.includes(genre)
                      ? "form-check-label ms-2 fw-bold text-danger "
                      : "form-check-label ms-2 "
                  }
                  htmlFor={genre}
                >
                  {genre}
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

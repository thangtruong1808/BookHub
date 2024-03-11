import { useEffect, useState } from "react";
import { Book } from "../services/book-service";
// import genres from "../data/genres";

// interface Genre {
//   name: string;
// }
interface Props {
  // genres: Genre[];
  onSelectedGenres: (genres: string[]) => void;
  selectedGenrefromHomeComponent: string[] | undefined;
}
const AsideBar = ({
  onSelectedGenres,
  selectedGenrefromHomeComponent,
}: Props) => {
  const [selectedFilterGenres, setSelectedFilterGenres] = useState<string[]>(
    []
  );
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedGenre2, setSelectedGenre2] = useState<string[] | null>([]);
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
    // console.log("------- you called AsideBar Component -------");
    UpdateSelectedGenres();
    // setSelectedGenre2(selectedGenrefromHomeComponent);
  }, [selectedFilterGenres]);

  const handleFilterGenre = (genre: string) => {
    // console.log("--- You clicked handleFilterGenre  ---");

    if (selectedFilterGenres.includes(genre)) {
      const filters = selectedFilterGenres.filter(
        (element) => element !== genre
      );
      setSelectedFilterGenres(filters);
      // setSelectedGenre(genre);
      // onSelectedGenres(selectedFilterGenres);
    } else {
      setSelectedFilterGenres([...selectedFilterGenres, genre]);
      // setSelectedGenre(genre);
      // onSelectedGenres(selectedFilterGenres);
    }
  };
  // console.log("selectedFilterGenres: " + selectedFilterGenres);
  // console.log(
  //   "selectedGenrefromHomeComponent: " + selectedGenrefromHomeComponent
  // );
  const UpdateSelectedGenres = () => {
    onSelectedGenres(selectedFilterGenres);
  };

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
              <span className="fw-bold fs-5 text-center">Genres</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
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
                  // id="checkbox"
                  checked={
                    selectedGenrefromHomeComponent?.includes(genre)
                      ? true
                      : false
                  }
                  onChange={() => handleFilterGenre(genre)}
                  value={genre}
                />
                <label
                  onClick={() => handleFilterGenre(genre)}
                  // className="form-check-label ms-1"
                  className={
                    // selectedGenrefromHomeComponent
                    // selectedFilterGenres

                    selectedGenrefromHomeComponent?.includes(genre)
                      ? "form-check-label ms-2 fw-bold text-primary"
                      : "form-check-label ms-2 "

                    // ? "form-check-label ms-2 fw-bold text-danger "
                    //     : "form-check-label ms-2 "
                  }
                  // htmlFor={genre}
                  // htmlFor="checkbox"
                  // htmlFor={allGenres.forEach((gen) => {
                  //   selectedGenrefromHomeComponent?.filter((gen2) => {
                  //     gen2 === gen && gen2;
                  //   });
                  // })}
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

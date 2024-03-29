import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import book_detail_service, { BookProps } from "../services/bookdetail-service";
import { CanceledError } from "axios";
import NavBar from "../components/NavBar";
import AsideBar from "../components/AsideBar";
import { AiFillStar } from "react-icons/ai";

const BookDetail = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const [bookID, setBookID] = useState<string | undefined>();
  const [bookdetail, setBookDetail] = useState<BookProps>();

  const { ID } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setBookID(ID);
    const { request, cancel } = book_detail_service.getSingle(bookID);
    request
      .then((res) => {
        setLoading(false);
        setBookDetail(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, [bookID]);

  //   console.log(bookdetail);
  const HandleOnSearch = () => {
    console.log("");
  };

  const HandleOnSelectedGenres = () => {
    console.log("");
  };
  return (
    <>
      <div className="myApp">
        <NavBar
          onSearch={HandleOnSearch}
          onSelectedGenres={HandleOnSelectedGenres}
        />
        <div className="container mt-5 vh-100">
          <div className="hstack">
            <div>
              <img
                src={bookdetail?.image_url}
                alt={bookdetail?.title}
                style={{ width: "15rem", height: "25rem" }}
              />
            </div>
            <div className="cart-body">
              <p className="fs-2 fw-bold mx-5">{bookdetail?.title}</p>
              <p className="fs-5 mx-5 ">
                <span className="fw-bold ">Author:</span>
                <span className="badge bg-info text-dark mx-2">
                  {bookdetail?.authors}
                </span>
              </p>
              <p className="fs-6 mx-5">
                <span className="fw-bold">Genres:</span>
                <span className="mx-2">{bookdetail?.genres}</span>
              </p>
              <p className="fs-6 mx-5">
                <span className="fw-bold">Description:</span>
                <span className="mx-2">{bookdetail?.description}</span>
              </p>
              <p className="fs-6 mx-5">
                <span className="fw-bold">Rating:</span>
                <span className="badge bg-light text-dark fs-6 mx-2">
                  {bookdetail?.rating}
                </span>
                <AiFillStar className="text-warning fs-4 mb-1" />
                <span className="mx-5">
                  Pages:{" "}
                  <span className="badge bg-secondary fs-6">
                    {bookdetail?.num_pages}
                  </span>
                </span>
              </p>
            </div>
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
            style={{ width: "15rem" }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default BookDetail;

{
  /* <div className="card" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>; */
}

import { useEffect, useState } from "react";
import bookService, { BookProps } from "../services/book-service";
import { CanceledError } from "../services/api-client";
import axios from "axios";

interface Props {
  id: number;
}
const useBookDetail = ({ id }: Props) => {
  const [bookdetail, setBookDetail] = useState<BookProps>();
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get<BookProps>("https://example-data.draftbit.com/books/" + id)
      .then((res) => setBookDetail(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  return { bookdetail, error, isLoading, setError, setBookDetail };
};

export default useBookDetail;

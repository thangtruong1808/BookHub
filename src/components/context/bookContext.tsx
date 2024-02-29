/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { Book } from "../../services/book-service";
// import { Book } from "../../services/book-service";
// import { Book } from "../../services/book-service";

export const AppContext = createContext<Book[]>([]);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be within  appContextProvider!");
  }

  return context;
};

// interface Props {
//   books: Book[];
// }
// const bookContextProvider: React.FC<{ children: React.ReactNode }> = ({
const bookContextProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Book[]>([]);
  // const [favorites, setFavorites] = useState([]);

  const AddToFavorites = (book: Book) => {
    const oldFavovirites = [...favorites];

    const newFavorites = oldFavovirites.concat(book);
    setFavorites(newFavorites);
  };

  const RemoveFromFavorites = (id: number) => {
    const oldFavovirites = [...favorites];
    const newFavorites = oldFavovirites.filter((book) => book.id !== id);
    setFavorites(newFavorites);
  };
  const value = {
    favorites,
    AddToFavorites,
    RemoveFromFavorites,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default bookContextProvider;

import React, { useEffect, useState } from "react";
import { getBook } from "../services/getBook";

const useBook = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //load book
    getBook().then((books) => {
      setIsLoading(false);
      setBooks(formatBooks(books));
    });
  }, []);

  const formatBooks = (books) => {
    return books.map((book) => ({
      ...book, 
      isFavorite: false,
      volumeInfo: {
        ...book.volumeInfo,
        title: book.volumeInfo.title || "--",
        description: book.volumeInfo.description || "--", 
        authors: book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? book.volumeInfo.authors[0] : "--" ,
      }
    })) 
  }

  return {
    isLoading,
    books,
    setBooks
  };
};

export default useBook;
